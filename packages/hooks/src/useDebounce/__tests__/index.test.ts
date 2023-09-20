import { renderHook } from '@testing-library/react';
import useDebounce from '../index';

const sleep = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
describe('useDebounce', () => {
  it('基础功能测试', async () => {
    let value = 0;
    const { rerender, result } = renderHook(() => useDebounce(0, 200));
    expect(result.current).toBe(0);

    value = 1;
    rerender();

    await sleep(250);

    expect(result.current).toBe(1);
  });
});
