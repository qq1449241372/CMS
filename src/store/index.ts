import { createStore, Store, useStore as userVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
// modules
import login from './login/login'
import system from './main/system/system'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'dk',
      age: 23
    }
  },
  mutations: {},
  actions: {},
  modules: { login, system }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return userVuexStore()
}
export default store
