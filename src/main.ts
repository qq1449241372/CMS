import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(store)

// 初始化vuex
setupStore()
app.use(router)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
