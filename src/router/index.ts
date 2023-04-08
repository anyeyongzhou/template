import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Detail from '../components/Detail.vue'

const routes = [
  {
    //登录界面router
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../components/Welcome.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

// 创建路由
const router = createRouter({
  // process是一个进程
  // process.env.BASE_URL是当前环境配置的基础路径
  //history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
