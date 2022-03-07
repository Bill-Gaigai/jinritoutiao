// axios的二次封装+封装基地址
import axios from 'axios'

axios.defaults.baseURL = 'http://toutiao.itheima.net'

// 或者：

// const axios = axios.create({
//   baseURL : ' http://toutiao.itheima.net'
// })

export default axios