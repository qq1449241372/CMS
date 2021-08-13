<template>
  <div class="login-container">
    <el-card>
      <h1>资产公司</h1>
      <h1>信息管理系统</h1>
      <div class="login-form">
        <el-form :model="account" :rules="rules" ref="formRef">
          <el-form-item label="账号：" prop="username">
            <el-input v-model="account.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input
              v-model="account.password"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="account-control">
          <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
          <el-link type="primary">忘记密码</el-link>
        </div>
        <el-button type="primary" class="btn-login" @click="loginAction">
          登录
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      username: '',
      password: ''
    })
    const isKeepPassword = ref(true)
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            // 本地缓存
            localCache.setCache('username', account.username)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }
          // 进行登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { account, rules, isKeepPassword, formRef, loginAction }
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
