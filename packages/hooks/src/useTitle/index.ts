import { useRef, useEffect } from 'react';

const DEFAULT_OPTIONS = {
  restorePrevTitle: false,
};
type Fn = () => void;

// 保留上次的值,解决闭包问题
const useLatest = <T>(value: T) => {
  const ref = useRef(value);
  ref.current = value;
  return ref;
};
const useUnmount = (fn: Fn) => {
  const fnRef = useLatest(fn);
  useEffect(() => () => fnRef.current(), []);
};

function useTitle(title: string, options = DEFAULT_OPTIONS) {
  const titleRef = useRef(document.title);
  useEffect(() => {
    document.title = title;
  }, [title]);
  useUnmount(() => {
    if (options.restorePrevTitle) {
      document.title = titleRef.current;
    }
  });
}

export default useTitle;
