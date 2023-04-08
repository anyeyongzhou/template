import axios from 'axios'
import { ElMessage } from 'element-plus'
import config from '../config/index.js'

//响应拦截返回的message为空时弹出的默认信息
const NETWORK_ERROR = '网络请求异常，请稍后再试'

// 调用 axios.create() 方法，创建 axios 的实例对象
const instance = axios.create({
  // 请求根路径
  baseURL: config.baseApi,
  timeout: 8000
})

//请求拦截
axios.interceptors.request.use(
  (config) => {
    const headers = config.headers
    //验证请求头有没有带验证的凭证jwt
    if (!headers.Authorization) {
      headers.Authorization = ''
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截
axios.interceptors.response.use(
  (response) => {
    const { code, message } = response.data //code是接口状态码，和HTTP的状态码不是一回事
    if (code === 200) {
      response.data
    } else {
      //处理token失效等
      ElMessage.error(message || NETWORK_ERROR)
    }
    return response
  },
  (error) => {
    errorHandle(error.code, error.message)
    return Promise.reject(error)
  }
)

//错误状态码对应的情况
const errorHandle = (status:any, info:any) => {
  switch (status) {
    case 400:
      ElMessage.error('语义有误')
      break
    case 401:
      ElMessage.error('服务认证失败')
      break
    case 403:
      ElMessage.error('服务器拒绝访问')
      break
    case 404:
      ElMessage.error('地址错误')
      break
    case 500:
      ElMessage.error('服务器遇到意外')
      break
    case 502:
      ElMessage.error('服务器无响应')
      break
    default:
      ElMessage.error('未知错误，请查看详细信息：' + info)
      break
  }
}

//包裹instance实例
//目的是为了抹平post和get请求带的参数名不一致问题，使用的时候只用传data，在这里处理
function request(options:any):any {
  //默认情况为get请求
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  if (config.env === 'prod') {
    //线上环境
    instance.defaults.baseURL = config.baseApi
  } else {
    //mock为true为开发环境，false为测试环境
    instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return instance(options)
}

// ;['get', 'post', 'put', 'delete'].forEach((item) => {
//   request.item = (url:string, data:object)=> {
//     return request({
//       method: item,
//       url,
//       data
//     })
//   } 
// })

request.post = (url:string, data:object)=> {
  return request({
    method: 'post',
    url,
    data
  })
} 

request.get = (url:string, data:object)=> {
  return request({
    method: 'get',
    url,
    data
  })
} 

request.put = (url:string, data:object)=> {
  return request({
    method: 'put',
    url,
    data
  })
} 

request.delete = (url:string, data:object)=> {
  return request({
    method: 'delete',
    url,
    data
  })
} 

export default request
