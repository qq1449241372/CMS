import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'
import './service/axios_demo'
const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
