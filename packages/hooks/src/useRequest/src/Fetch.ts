import { Service, Options, PluginReturn } from './types';
interface FetchState<TData, TParams> {
  loading: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
}
export default class Fetch<Tdata, Tparams extends []> {
  pluginImpls: PluginReturn<Tdata, Tparams>[];
  count: number = 0;
  state: FetchState<Tdata, Tparams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };
  constructor(
    public serviceRef: Service<Tdata, Tparams>,
    public options: Options<Tdata, Tparams>,
    public update: () => void,
    public initState: Partial<FetchState<Tdata, Tparams>> = {},
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...initState,
    };
  }
  runPluginHandler(event: keyof PluginReturn<Tdata, Tparams>, ...rest) {
    const r = this.pluginImpls.map((i) => i[event]?.(...rest)?.filter(Boolean));
    return Object.assign({}, ...r);
  }
  setState(s: Partial<FetchState<Tdata, Tparams>> = {}) {
    this.state = {
      ...this.state,
      ...s,
    };
    this.update();
  }
  run(...params: Tparams) {
    this.runAsync(...params).catch((error) => {
      console.log(error);
    });
  }
  // 异步执行请求
  async runAsync(...params: Tparams): Promise<Tdata> {
    this.count += 1;
    const currentCount = this.count;
    const {
      stopNow = false,
      returnNow = false,
      ...state
    } = this.runPluginHandler('onBefore', params);

    // stop request
    if (stopNow) {
      return new Promise(() => {});
    }
    this.setState({ loading: true, params, ...state });
    if (returnNow) {
      return Promise.resolve(state.data);
    }

    this.options.onBefore?.(params);
    try {
      // replace service
      let { servicePromise } = this.runPluginHandler(
        'onRequest',
        this.serviceRef.current,
        params,
      );

      if (!servicePromise) {
        servicePromise = this.serviceRef.current(...params);
      }

      const res = await servicePromise;

      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {});
      }

      // const formattedResult = this.options.formatResultRef.current ? this.options.formatResultRef.current(res) : res;

      this.setState({
        data: res,
        error: undefined,
        loading: false,
      });

      this.options.onSuccess?.(res, params);
      this.runPluginHandler('onSuccess', res, params);

      this.options.onFinally?.(params, res, undefined);

      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, res, undefined);
      }

      return res;
    } catch (error) {
      if (currentCount !== this.count) {
        // prevent run.then when request is canceled
        return new Promise(() => {});
      }

      this.setState({
        error,
        loading: false,
      });

      this.options.onError?.(error, params);
      this.runPluginHandler('onError', error, params);

      this.options.onFinally?.(params, undefined, error);

      if (currentCount === this.count) {
        this.runPluginHandler('onFinally', params, undefined, error);
      }

      throw error;
    }
  }
  refresh() {
    this.run(...(this.state.params || ([] as Tparams)));
  }
  refreshAsync() {
    this.runAsync(...(this.state.params || ([] as Tparams)));
  }
  cancel() {
    this.count += 1;
    this.setState({ loading: false });
    this.runPluginHandler('onCancel');
  }
}
