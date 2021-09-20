import axios from 'axios'

// 方案一
// export function request(config, success, failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 8000
//   })
//
//   //2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// 方案二
// export function request(config) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 8000
//   })
//
//   //2.发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }

//方案三
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建axios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 8000
//     })
//
//     //2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

//最终方案
export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 8000,
  })

  //2.axios的拦截器
  //全局拦截
  //axios.interceptors
  //2.1拦截请求的作用
  //两个参数：都为函数
  instance.interceptors.request.use(
    (config) => {
      // console.log(config)
      //1.比如config中的一些信息不符合服务器要求，我们需要将config中的信息进行变化后再给服务器传递
      //2.比如我们每次发送网络请求时都希望在界面中显示请求的图标
      //3.某些网络请求是必须携带一些特殊信息，比如登录（token）
      //注意：拦截之后一定在将其返回，不然拦截到之后，浏览器无法请求到信息
      return config
    },
    (err) => {
      console.log(err)
    }
  )
  //2.2拦截响应
  instance.interceptors.response.use(
    (res) => {
      // console.log(res)
      //注意：拦截之后一定在将其返回，不然拦截到之后，浏览器无法请求到信息
      return res.data
    },
    (err) => {
      console.log(err)
    }
  )

  //3.发送真正的网络请求
  return instance(config)
}
