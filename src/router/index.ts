/**
 * @project kufo
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-11 17:18
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from '@/views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Home,
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory('.'),
  routes
})

export default router
