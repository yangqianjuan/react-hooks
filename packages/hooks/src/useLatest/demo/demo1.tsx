import React, { useState, useEffect } from 'react';
import { useLatest } from 'reactHooks';

export default () => {
  const [count, setCount] = useState(0);
  const latestCountRef = useLatest(count);
  useEffect(() => {
    const intervel = setInterval(() => {
      console.log(count); //此处的count是闭包，是外部count的初始值0
      console.log(latestCountRef.current);
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(intervel);
  }, []);
  return <div>{count}</div>;
};
