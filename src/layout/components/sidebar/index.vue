<template>
  <div :class="{'has-logo': showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :background-color="variables.menuBg"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
      ></el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './logo.vue'
import variables from '@/assets/less/vars.less'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Logo
  },
  data() {
    return {
    }
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
    },
    isCollapse(): boolean {
      return false
    }
  }
})
</script>

<style scoped>

</style>
