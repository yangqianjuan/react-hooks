import { __read } from "tslib";
/**
 * const [state,{toggle,setLeft,setRigt}]=useToggle('1','2')
 */
import { useState, useMemo } from 'react';
function useToggle(defaultValue, reverseValue) {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  var _a = __read(useState(defaultValue), 2),
    state = _a[0],
    setState = _a[1];
  var actions = useMemo(function () {
    var reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    var setLeft = function () {
      setState(defaultValue);
    };
    var setRight = function () {
      setState(reverseValueOrigin);
    };
    var toggle = function () {
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
export default useToggle;