<template>
  <div id="backcount">
    <div class="meituan-content">
      <div class="login-cont">
        <div class="meitun-title">扫码点菜客户端</div>
        <div class="meituan-user">
          <p>账号</p>
          <el-input
            class="inputflex"
            v-model="user.account"
            placeholder="请输入账号"
          />
        </div>
        <div class="meituan-user">
          <p>密码</p>
          <el-input
            class="inputflex"
            v-model="user.password"
            type="password"
            placeholder="请输入密码"
            show-password
          />
        </div>
        <!-- 注册 -->
        <div class="reg-view" @click="registerClick">
          <p>{{ user.register }}</p>
        </div>
        <!-- 登录 -->
        <div>
          <el-button
            type="success"
            class="meitun-btn"
            v-if="!user.isRegister"
            @click="onLoginBtn"
            >登录</el-button
          >
          <el-button
            type="success"
            class="meitun-btn"
            v-else
            @click="onRegisterBtn"
            >注册</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { loginAPI } from '../../api/api.js'
const user = reactive({
  account: '',
  password: '',
  register: '注册',
  isRegister: false
})

//登录注册切换
const registerClick = () => {
  if (user.register == '注册') {
    user.register = '登录'
    // console.log(user)
    user.isRegister = true
  } else {
    user.register = '注册'
    user.isRegister = false
  }
}

//登录点击
const onLoginBtn = () => {
  const res = loginAPI({})
  console.log(res)
}

//注册点击
const onRegisterBtn = () => {}
</script>

<style lang="less" scoped>
#backcount {
  // height: 100px;
  // width: 100px;
  background-image: url(../../../static/login.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  // border: 1px solid blue;
}
.meituan-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // border: 1px solid red;
  opacity: 90%;
}
.login-cont {
  width: 500px;
  height: 320px;
  background: rgb(230, 67, 135);
  border-radius: 10px;
}
.meitun-title {
  text-align: center;
  color: #000000;
  font-size: 30px;
  padding-top: 30px;
  // margin-top: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.meituan-user {
  width: 400px;
  margin: 0 auto;
  padding-top: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  // justify-content: center;
  // border: 1px solid red;
}
.meituan-user > p {
  width: 50px;
  color: #000000;
  font-size: 16px;
}
.inputflex {
  flex: 1;
  // border: 1px solid blue;
}
.reg-view {
  width: 400px;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  padding-top: 10px;
}
.reg-view > p {
  cursor: pointer;
  display: contents;
}
.meitun-btn {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 0 auto;
  font-size: 16px;
}
</style>
