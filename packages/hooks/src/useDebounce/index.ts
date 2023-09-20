import { useEffect, useState } from 'react';
function useDebounce<T>(value: T, waitTime: number) {
  if (waitTime === undefined) {
    console.error('请输入waitTime');
  }
  const [debounce, setDebounce] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, waitTime);

    return () => clearTimeout(timer);
  }, [value, waitTime]);

  return debounce;
}

export default useDebounce;
