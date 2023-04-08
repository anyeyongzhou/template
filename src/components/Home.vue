<template>
  <div class="container">
    <div class="side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="menu">菜单</div>
        <div class="name">名字</div>
      </div>
      <div class="wrapper">
        <div class="main-page">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import request from '../utils/request.js'

const router = useRouter()
const gotoWelcome = () => {
  router.push('welcome')
}
onMounted(() => {
  request({
    method: 'GET',
    url: '/user/login'
  }).then((res: any) => {
    //console.log(res)
  })
})
</script>

<style lang="less" scoped>
.container {
  position: relative;
}
.side {
  position: fixed;
  width: 200px;
  height: 100%;
  color: #fff;
  background: #001529;
}
.content-right {
  margin-left: 200px;
}
.nav-top {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  // border: 1px solid red;
}

.wrapper {
  background: #eef0f3;
  height: calc(100vh - 50px);
  padding: 20px;
}
.main-page {
  background-color: #fff;
  height: 100%;
  padding: 20px;
}
</style>
