<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <dk-breadcrumb
        :breadCrumbs="breadCrumbs"
        class="breadcrumb"
      ></dk-breadcrumb>

      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
// vue api
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
// components
import UserInfo from './user-info.vue'
import DkBreadcrumb from '@/base-ui/breadcrumb'
// utils
import { pathMapBreadCrumb } from '@/utils/map-menus'

export default defineComponent({
  components: { UserInfo, DkBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    // instantiation vue api
    const store = useStore()
    const route = useRoute()
    // breadcrumb data
    const breadCrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadCrumb(userMenus, currentPath)
    })
    return { isFold, breadCrumbs, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
  .breadcrumb {
    cursor: not-allowed;
  }
}
</style>
