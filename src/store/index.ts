import { createStore, Store, useStore as userVuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'dk',
      age: 23
    }
  },
  mutations: {},
  actions: {},
  modules: { login }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return userVuexStore()
}
export default store
