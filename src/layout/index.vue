<template>
  <div class="app-wrapper">
<!--    <div class="drawer-bg" />-->
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AppMain, Sidebar, Navbar } from './components'

export default defineComponent({
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    Navbar
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

  .mobile.openSidebar {
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

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
