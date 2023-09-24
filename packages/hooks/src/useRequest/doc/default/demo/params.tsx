import React, { useRef, useEffect, useState } from 'react';
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
    onBefore(params) {},
    defaultParams: ['1'],
  };
  const { error, loading, data, run, params } = useRequest(
    getUserName,
    options,
  );
  console.log(params, loading);
  return (
    <div>
      <input
        type="text"
        style={{ width: 240, marginRight: 16 }}
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          run(state);
        }}
      >
        改变userId
      </button>
      <p>useId是:{params[0]}</p>
      <p>useName是:{data}</p>
    </div>
  );
};
