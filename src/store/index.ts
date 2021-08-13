import { createStore } from 'vuex'
import { IRootState } from './types'
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
export default store
