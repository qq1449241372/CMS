import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { ISystemState } from './types'

const systemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    getPageListAction({ commit }, payload: any) {
      
    }
  }
}

export default systemModule
