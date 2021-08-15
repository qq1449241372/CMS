import { createRouter, createWebHashHistory } from 'vue-router'
import localStorage from '@/utils/cache'
import type { RouteRecordRaw } from 'vue-router'
import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
// 防止用户刷新操清除vuex
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localStorage.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  // userMenus => routes
  const userMenus = (store.state as any).login.userMenus
  const routes = mapMenusToRoutes(userMenus)

  // 将routes => router.main.children
  routes.forEach((route) => {
    router.addRoute('main', route)
  })
})

export default router
