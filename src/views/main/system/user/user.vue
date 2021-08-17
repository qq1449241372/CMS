<template>
  <div class="user">
    <div class="search">
      <dk-form v-bind="formConfig" v-model="formData">
        <template #header>
          <h1 class="header">高级检索</h1>
        </template>
        <template #footer>
          <h1 class="footer">
            <div class="handle-btn-groups">
              <el-button type="" icon="el-icon-refresh">重置</el-button>
              <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
          </h1>
        </template>
      </dk-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import DkForm from '@/base-ui/form'
import { formConfig } from './config/search.config'
export default defineComponent({
  name: 'user',
  components: { DkForm },
  setup() {
    const formData = reactive({
      // id: '',
      username: '',
      password: '',
      realName: '',
      role: '',
      phone: '',
      createdTime: ''
    })
    return { formConfig, formData }
  }
})
</script>

<style scoped lang='less'>
.handle-btn-groups {
  text-align: right;
}
</style>
