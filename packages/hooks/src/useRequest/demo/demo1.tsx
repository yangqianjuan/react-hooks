import React, { useRef, useEffect } from 'react';
import Mock from 'mockjs';
import { useRequest, useMemorizedFn } from 'reactHooks';
const getUserName = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
};
export default () => {
  // 测试
  // function a() {
  //   console.log('a');
  // }
  // const aFn = useMemorizedFn(a);
  // const bFn = useMemorizedFn(a);
  // const cFn = useMemorizedFn(a);
  // console.log(aFn == bFn, bFn === cFn);
  // console.log('请求结果----', data, error, loading);
  // 测试

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
