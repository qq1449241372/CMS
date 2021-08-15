export interface IAccount {
  username: string
  password: string
}
export interface IMeta {
  msg: string
  status: string
}
export interface IData<T = any> {
  token: string
  userInfo: T
  userMenus: T
}
export interface ILoginResult<D = any, M = any> {
  data: D
  meta: M
}
