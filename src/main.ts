import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global/index'
import 'normalize.css'
import './assets/css/index.less'
import dkRequest from './service'
const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)

app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
interface DataType {
  data: any
  meta: any
}
dkRequest
  .request<DataType>({
    url: '/api/part?pagenum=1&pagesize=10',
    method: 'GET',
    showLoading: true
  })
  .then((res) => {
    console.log(res.data, res.meta)
  })
