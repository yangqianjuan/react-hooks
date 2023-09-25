import useRequestImplement from './useRequestImplement';
import { Service, Options } from './types';
import useAutoRunPlugin from './plugins/useAutoRunPlugin';
import useLoadingDelayPlugin from './plugins/useLoadingDelayPlugin';
import { Plugin } from './types';
function useRequest<Tdata, Tparams extends []>(
  Service: Service<Tdata, Tparams>,
  options?: Options<Tdata, Tparams>,
  plugins?: Plugin<Tdata, Tparams>[],
) {
  return useRequestImplement<Tdata, Tparams>(Service, options, [
    ...(plugins || []),
    useAutoRunPlugin,
    useLoadingDelayPlugin,
  ] as Plugin<Tdata, Tparams>[]);
}

export default useRequest;
