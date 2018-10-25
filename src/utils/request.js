import axios from 'axios'
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   // config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  // }
  if (config.method === 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) { // 不等于200是错误异常
      return Promise.reject(res.msg)
    } else {
      return response.data
    }
    // if (res.code !== 0) {
    //   Message({
    //     message: res.message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //       confirmButtonText: '重新登录',
    //       cancelButtonText: '取消',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload()// 为了重新实例化vue-router对象 避免bug
    //       })
    //     })
    //   }
    // }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)

export default {
  // 封装POST请求
  fetchPost: (code, params) => {
    return new Promise((resolve, reject) => {
      service.post(process.env.BASE_API + code, params)
        .then(response => {
          resolve(response)
        }, err => {
          Message({
            message: err,
            type: 'error',
            duration: 5 * 1000
          })
          reject(err)
        })
        .catch((error) => {
          Message({
            message: error,
            type: 'error',
            duration: 5 * 1000
          })
          reject(error)
        })
    })
  },
  // 封装GET请求
  fetchGet: (code, params) => {
    // const load = Loading.service({
    //   lock: true,
    //   text: '正在加载中...',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(0, 0, 0, 0.3)'
    // })
    return new Promise((resolve, reject) => {
      service.get(process.env.BASE_API + code, {
        params: params
      })
        .then(response => {
          // load.close()
          resolve(response)
        }, err => {
          // load.close()
          reject(err)
        })
        .catch((error) => {
          // load.close()
          reject(error)
        })
    })
  }

}
