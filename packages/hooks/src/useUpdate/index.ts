import { useState, useCallback } from 'react';
function useUpdate() {
  // 会更新组件，调用re-render
  const [, setState] = useState({});
  console.log('更新页面');
  return useCallback(() => setState({}), []);
}
export default useUpdate;
