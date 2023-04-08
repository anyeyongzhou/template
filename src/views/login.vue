<template>
  <div class="login-wrapper">
    <div class="modeal-content">
      <el-form>
        <div class="title">ERP后台管理系统</div>
        <el-form-item>
          <el-input
            type="text"
            placeholder="用户名"
            prefix-icon="Avatar"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="text"
            placeholder="用户密码"
            prefix-icon="View"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
//防抖
import debounce from 'lodash/debounce'
//节流
import throttle from 'lodash/throttle'
const searchClick = debounce(() => {
  //console.log('防抖函数执行')
  //store.commit('setSearchInput', inputObject)
}, 1000)
</script>

<style lang="less" scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #eee;
}
.modeal-content {
  width: 500px;
  padding: 50px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px 3px #999;
}
.title {
  font-size: 40px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 30px;
}
.btn-primary {
  width: 100%;
  height: 40px;
}
</style>
