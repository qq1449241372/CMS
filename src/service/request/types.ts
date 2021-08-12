import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface DKRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}
export interface DKRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DKRequestInterceptor
  showLoading?: boolean
}
