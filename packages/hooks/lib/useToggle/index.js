"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _tslib = require("tslib");
var _react = require("react");
/**
 * const [state,{toggle,setLeft,setRigt}]=useToggle('1','2')
 */

function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = (0, _tslib.__read)((0, _react.useState)(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = (0, _react.useMemo)(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var setLeft = function setLeft() {
      setState(defaultValue);
    };
    var setRight = function setRight() {
      setState(reverseValueOrigin);
    };
    var toggle = function toggle() {
      setState(function (s) {
        return s === defaultValue ? reverseValueOrigin : defaultValue;
      });
    };
    return {
      setLeft: setLeft,
      setRight: setRight,
      toggle: toggle
    };
  }, []);
  return [state, actions];
}
var _default = useToggle;
exports.default = _default;