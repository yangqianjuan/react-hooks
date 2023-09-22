import React from 'react';
import { useUpdate } from 'reactHooks';

export default () => {
  const update = useUpdate();

  return (
    <div>
      <div>更新时间：{Date.now()}</div>
      <button onClick={update}>更新</button>
    </div>
  );
};
