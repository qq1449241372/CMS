<template>
  <div class="user">
    <div class="search">
      <dk-form :formItems="formItems"></dk-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DkForm, { IFormItem } from '@/base-ui/form'
export default defineComponent({
  name: 'user',
  components: { DkForm },
  setup() {
    const formItems: IFormItem[] = [
      { type: 'input', label: '用户名', rules: [], placeholder: '用户名' },
      { type: 'input', label: '密码', rules: [], placeholder: '密码' },
      { type: 'input', label: '姓名', rules: [], placeholder: '姓名' },
      { type: 'input', label: '手机号', rules: [], placeholder: '手机号' },
      {
        type: 'select',
        label: '角色',
        rules: [],
        placeholder: '角色',
        options: [{ label: '超级管理员' }, { label: '超级管理员' }]
      },
      {
        type: 'datepicker',
        label: '创建时间',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return { formItems }
  }
})
</script>

<style scoped></style>
