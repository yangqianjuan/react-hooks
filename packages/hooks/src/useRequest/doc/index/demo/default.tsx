import React, { useRef, useEffect } from 'react';
import Mock from 'mockjs';
import { useRequest } from 'reactHooks';
const getUserName = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
};
export default () => {
  const { error, loading, data } = useRequest(getUserName);
  if (error) {
    return <p>有错误：{JSON.stringify(error)}</p>;
  }
  if (loading) {
    return <p>加载中...</p>;
  }
  if (data) {
    return <p>useName是:{data}</p>;
  }
};
