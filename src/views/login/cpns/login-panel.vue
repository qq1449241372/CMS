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
            <el-input v-model="account.password" show-password></el-input>
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
    const isKeepPassword = ref(true)
    const account = reactive({
      username: localCache.getCache('username') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword.value) {
            // 本地缓存
            localCache.setCache('username', account.username)
            localCache.setCache('password', account.password)
          } else {
            // 删除本地缓存
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }
          // 进行登陆验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return { isKeepPassword, account, rules, formRef, loginAction }
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
