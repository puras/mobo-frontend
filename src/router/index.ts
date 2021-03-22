/**
 * @project kufo
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-11 17:18
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/home.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/about.vue'),
        meta: {
          title: 'About',
          icon: 'icon'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHistory('.'),
  routes
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  // @ts-ignore
  window.document.title = import.meta.env.VITE_APP_TITLE + (to.meta.title === undefined ? '' :  '-' + to.meta.title)
  next()
})

export default router
