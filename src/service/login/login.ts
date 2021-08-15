import dkRequest from '../index'
import type { IAccount, IData, IMeta, ILoginResult } from './types'

enum LoginAPI {
  loginUrl = '/login'
}

export function loginRequest(account: IAccount) {
  return dkRequest.post<ILoginResult<IData, IMeta>>({
    url: LoginAPI.loginUrl,
    data: account
  })
}
