/**
 * title: 刷新用户名称
 */
import Mock from 'mockjs';
import React, { useEffect } from 'react';
import { useRequest } from 'reactHooks';

function getUsername(...arg): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, refresh } = useRequest(
    (...arg: any[]): Promise<string> => getUsername(...arg),
    {
      manual: true,
    },
  );

  useEffect(() => {
    run(1);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <p>Username: {data}</p>
      <button onClick={refresh} type="button">
        Refresh
      </button>
    </div>
  );
};
