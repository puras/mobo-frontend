<template>
  <div :class="classObj" class="app-wrapper">
<!--    <div class="drawer-bg" />-->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
      <right-panel></right-panel>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import RightPanel from '@/components/right-panel/index.vue'
import { AppMain, Sidebar, Navbar } from './components'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar,
    RightPanel
  },
  setup() {
    const store = useStore()
    const sidebar = computed(() => store.state.app.sidebar)
    const device = computed(() => store.state.app.device)
    const classObj = computed(() => {
      return {
        'hide-sidebar': !sidebar.value.opened,
        'open-sidebar': sidebar.value.opened,
        'without-animation': sidebar.value.withoutAnimation,
        'mobile': device.value === 'mobile'
      }
    })

    return {
      classObj
    }
  }
})
</script>

<style lang="less" scoped>
@import '../assets/less/mixin.less';
@import '../assets/less/vars.less';
.app-wrapper {
  .clearfix();
  position: relative;
  width: 100%;
  height: 100%;

  .mobile.open-sidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - @sideBarWidth);
  transition: width 0.28s;
}

.hide-sidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
