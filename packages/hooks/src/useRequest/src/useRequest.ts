import useRequestImplement from './useRequestImplement';
import { Service, Options } from './types';
function useRequest<Tdata, Tparams extends []>(
  Service: Service<Tdata, Tparams>,
  options?: Options<Tdata, Tparams>,
) {
  return useRequestImplement<Tdata, Tparams>(
    Service,
    options,
    //要植入plugin
  );
}

export default useRequest;
