import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'
import locale from 'element-plus/lib/locale/lang/zh-cn'
const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)
// 初始化vuex
setupStore()
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
