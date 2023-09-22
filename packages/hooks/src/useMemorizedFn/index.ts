import { useRef, useMemo } from 'react';
type noop = (this, ...args: any[]) => any;

//实现一个持久化的hooks，用来替代useCallback
function useMemorizedFn<T extends noop>(fn: T) {
  const refFn = useRef<T>(fn);
  refFn.current = useMemo(() => fn, [fn]);

  const memorizedFn = useRef();
  if (!memorizedFn.current) {
    memorizedFn.current = function (this, ...args) {
      return refFn.current.bind(this, args);
    };
  }
  return memorizedFn.current as T;
}

export default useMemorizedFn;
