import { Module } from 'vuex'
import { IRootState } from '../types'
import { ILoginState } from './types'
import { loginRequest } from '@/service/login/login'
import type { IAccount } from '@/service/login/types'
import localStorage from '@/utils/cache'
import router from '@/router'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: ''
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      // console.log('commit', token)
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      // console.log('commit', userInfo)
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMeuns: any) {
      // console.log('commit', userMeuns)
      state.userMenus = userMeuns
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('do accountLoginAction', payload)
      // 登录逻辑
      const loginResult = await loginRequest(payload)
      const { token, userInfo, userMenus } = loginResult.data
      commit('changeToken', token)
      localStorage.setCache('token', token)
      commit('changeUserInfo', userInfo)
      localStorage.setCache('userInfo', userInfo)
      commit('changeUserMenus', userMenus)
      localStorage.setCache('userMenus', userMenus)
      //跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localStorage.getCache('token')
      const userInfo = localStorage.getCache('userInfo')
      const userMenus = localStorage.getCache('userMenus')
      if (token) {
        commit('changeToken', token)
      }
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
