import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';
var callToggle = function (hook) {
  act(function () {
    hook.result.current[1].toggle();
  });
};
var callLeftToggle = function (hook) {
  act(function () {
    hook.result.current[1].setLeft();
  });
};
describe('useToggle', function () {
  it('针对基础功能的使用功能', function () {
    var hooks = renderHook(function () {
      return useToggle();
    });
    console.log('hooks', hooks);
    expect(hooks.result.current[0]).toBeFalsy();
  });
  it('针对手动切换toggle模拟', function () {
    var hooks = renderHook(function () {
      return useToggle('left', 'right');
    });
    expect(hooks.result.current[0]).toBe('left');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('right');
    callLeftToggle(hooks);
    expect(hooks.result.current[0]).toBe('left');
  });
});