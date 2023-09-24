import React, { useRef, useEffect, useState } from 'react';
import { message } from 'antd';
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
  const [state, setState] = useState('');
  const options = {
    onBefore(params) {
      console.log('请求前。。。。。', params);
    },
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error) => {
      message.error(error.message);
    },
  };
  const { loading, run, runAsync } = useRequest(getUserName, options);
  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button
        disabled={loading}
        type="button"
        onClick={() => {
          run(state);
        }}
      >
        {loading ? 'Loading' : 'Edit'}
      </button>
    </div>
  );
};
