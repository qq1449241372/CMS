<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <div>{{ name }}</div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-switch-button"
            >退出登陆
          </el-dropdown-item>
          <el-dropdown-item divided icon="el-icon-user"
            >用户信息</el-dropdown-item
          >
          <el-dropdown-item icon="el-icon-setting">系统设置</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => {
      return store.state.login.userInfo?.username
    })
    return { name }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
