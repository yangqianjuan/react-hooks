type defaultFn = () => void;
export interface Actions {
    setLeft: defaultFn;
    setRight: defaultFn;
    toggle: defaultFn;
}
declare function useToggle<T = boolean>(): [T, Actions];
declare function useToggle<D, R>(defaultValue: D, reverseValue: R): [D | R, Actions];
export default useToggle;
