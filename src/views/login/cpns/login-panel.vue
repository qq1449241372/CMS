<template>
  <div class="login-container">
    <el-card>
      <h1>资产公司</h1>
      <h1>后台管理系统</h1>
      <div class="login-form">
        <el-form :ref="loginForm" :model="loginForm">
          <el-form-item label="账号：">
            <el-input v-model="account.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="account.password" type="password"></el-input>
          </el-form-item>
        </el-form>
        <div class="account-control">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button type="primary" class="btn-login">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const account = reactive({
      username: '',
      password: ''
    })
    return { account }
  }
})
</script>

<style scoped>
.login-container {
  text-align: center;
  width: 400px;
  height: 400px;
}
.login-form {
  /* width: 80%; */
  text-align: center;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.btn-login {
  margin-top: 20px;
  width: 100%;
}
</style>
