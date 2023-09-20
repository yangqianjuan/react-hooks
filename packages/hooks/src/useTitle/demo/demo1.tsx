import React from 'react';
import { useTitle } from 'reactHooks';

export default () => {
  useTitle('前娟自定义标题');
  return <div>能够修改页面标题</div>;
};
