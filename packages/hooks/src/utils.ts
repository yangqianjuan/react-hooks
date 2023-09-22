type Service<Tdata, Tparams extends []> = (...args: Tparams) => Promise<Tdata>;
interface Options<Tdata, Tparams extends []> {
  manual?: boolean; //是否是手动触发
}
export { Service, Options };
