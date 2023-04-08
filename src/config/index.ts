//vite提供的当前环境变量
const env = import.meta.env.MODE //development
const envConfig = {
  development: {
    baseApi: '',
    mockApi: 'https://mock.apifox.cn/m1/2490086-0-default'
  },
  prod: {
    baseApi: '',
    mockApi: ''
  },
  test: {
    baseApi: '',
    mockApi: ''
  }
}

export default {
  //当前的环境
  env,
  //总开关，判断是否需要mock的方式访问接口
  //mock为true为开发环境，false为测试环境
  mock: true,
  //用于解决localstorage命名冲突问题
  nameSpace: 'manager',
  //请求接口的地址，不同环境接口不同
  ...envConfig[env]
}
