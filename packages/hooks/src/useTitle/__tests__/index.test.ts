import { renderHook, act } from '@testing-library/react';
import useTitle from '../index';

describe('useTitle', () => {
  it('自定义标题的基础使用', () => {
    const hook = renderHook((props) => useTitle(props), {
      initialProps: '页面自定义标题',
    }); // 等同于useTitle( '页面自定义标题')

    expect(document.title).toBe('页面自定义标题');

    act(() => hook.rerender('另一个页面自定义标题')); //act调动dom的能力去执行某个动作

    expect(document.title).toBe('另一个页面自定义标题');
  });

  it('组件关闭回退', () => {
    document.title = '原有的页面标题';
    const hook = renderHook(
      (props) => useTitle(props, { restorePrevTitle: true }),
      {
        initialProps: '自定义的页面标题',
      },
    );
    expect(document.title).toBe('自定义的页面标题');

    act(() => {
      hook.unmount();
    });
    expect(document.title).toBe('自定义的页面标题', '原有的页面标题');
  });
});
