import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { DKRequestConfig, DKRequestInterceptor } from './types'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
// 默认加载动画
const DEFAULT_LOADING = true

class DKRequest {
  instance: AxiosInstance
  interceptors?: DKRequestInterceptor
  showLoading: boolean
  loading?: ILoadingInstance

  // 从 config中取出的拦截器是对应的实例的拦截器
  constructor(config: DKRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 从config中取出对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有的实例都有拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('all instances:req success')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rga(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('all instances:req err')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('all instances:res success')
        // 移除loading
        this.loading?.close()
        const data = res.data
        return data
      },
      (err) => {
        console.log('all instances:res err')
        return err
      }
    )
  }

  request<T>(config: DKRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: DKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: DKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  put<T>(config: DKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
  delete<T>(config: DKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default DKRequest
