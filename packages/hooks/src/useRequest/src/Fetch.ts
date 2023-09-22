import { Service, Options } from '../../utils';
// import type { MutableRefObject } from 'react';
interface FetchState<TData, TParams> {
  loading: boolean;
  params?: TParams;
  data?: TData;
  error?: Error;
}
export default class Fetch<Tdata, Tparams extends []> {
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
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
    };
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

    this.setState({ loading: true });

    try {
      const res = await this.serviceRef.current(...params);
      // if(currentCount!==this.count){
      //   说明不是一个请求
      // }
      // debugger;
      this.setState({ data: res, error: undefined, loading: false });
      return res;
    } catch (error) {
      this.setState({ error, loading: false });
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
  }
}
