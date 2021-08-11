import axios, { AxiosResponse } from 'axios'

axios
  .get('http://106.12.174.77:3000/api/part?pagenum=1&pagesize=10')
  .then((res: AxiosResponse<any>) => {
    console.log(res.data)
  })
