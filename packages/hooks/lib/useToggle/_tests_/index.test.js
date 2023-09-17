"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = require("@testing-library/react");
var _index = _interopRequireDefault(require("../index"));
var callToggle = function callToggle(hook) {
  (0, _react.act)(function () {
    hook.result.current[1].toggle();
  });
};
var callLeftToggle = function callLeftToggle(hook) {
  (0, _react.act)(function () {
    hook.result.current[1].setLeft();
  });
};
describe('useToggle', function () {
  it('针对基础功能的使用功能', function () {
    var hooks = (0, _react.renderHook)(function () {
      return (0, _index.default)();
    });
    console.log('hooks', hooks);
    expect(hooks.result.current[0]).toBeFalsy();
  });
  it('针对手动切换toggle模拟', function () {
    var hooks = (0, _react.renderHook)(function () {
      return (0, _index.default)('left', 'right');
    });
    expect(hooks.result.current[0]).toBe('left');
    callToggle(hooks);
    expect(hooks.result.current[0]).toBe('right');
    callLeftToggle(hooks);
    expect(hooks.result.current[0]).toBe('left');
  });
});