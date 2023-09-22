//真实请求
import { useMemo, useEffect } from 'react';
import useLatest from '../../useLatest';
import useUpdate from '../../useUpdate';
import useMemorizedFn from '../../useMemorizedFn';
import { Service, Options } from '../../utils';
import Fetch from './Fetch';

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};
const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), []);
};
function useRequestImplement<Tdata, Tparams extends []>(
  Service: Service<Tdata, Tparams>,
  options: Options<Tdata, Tparams> = {},
) {
  const { manual = false } = options;
  //基于原有的service发送请求，避免闭包
  const serviceRef = useLatest(Service);

  // 出发组件的更新useUpdate
  const update = useUpdate();
  const fetchInstance = useMemo(() => {
    // 给plugin去使用
    // 返回真实的fetch构造实例

    return new Fetch<Tdata, Tparams>(serviceRef, options, update);
  }, []);
  useMount(() => {
    if (!manual) {
      const params = fetchInstance.state.params;
      fetchInstance.run(params);
    }
  });

  useUnmount(() => {
    fetchInstance.cancel();
  });
  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    params: fetchInstance.state.params || [],
    error: fetchInstance.state.error,
    cancel: useMemorizedFn(fetchInstance.cancel.bind(fetchInstance)),
    run: useMemorizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemorizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    refresh: useMemorizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemorizedFn(
      fetchInstance.refreshAsync.bind(fetchInstance),
    ),
  };
}

export default useRequestImplement;
