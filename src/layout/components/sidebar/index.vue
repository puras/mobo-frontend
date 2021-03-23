<template>
  <div :class="{'has-logo': showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          background-color="#304156"
          text-color="#BFCBD9"
          :unique-opened="false"
          active-text-color="#409EFF"
          :collapse-transition="false"
          mode="vertical"
      >
<!--        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />-->
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>KuPo</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>KuDo</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>KuKo</template>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>导航四</template>
        </el-menu-item>
        <el-submenu index="5">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Logo from './logo.vue'
// import SidebarItem from './sidebar-item.vue'
import variables from '@/assets/less/vars.less'
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Logo,
    // SidebarItem
  },
  computed: {
    activeMenu(): string {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu as string
      }
      return path
    },
    showLogo(): boolean {
      return true
    },
    variables(): any {
      // console.log(variables.menuBg, 'menuBg')
      return variables
    }
  },
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.app.sidebar)

    const isCollapse = computed(() => !store.state.app.sidebar.opened)

    const routes = ref<RouteRecordRaw>([])

    routes.value = [
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
      }
    ]

    return {
      sidebar,
      isCollapse,
      routes
    }
  }
})
</script>

<style scoped>

</style>
