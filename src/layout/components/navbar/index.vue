<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="showSideBar" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <template v-if="device !== 'mobile'">
        <header-search id="header-search" class="right-menu-item" />
        <error-log class="errlog-container right-menu-item hover-effect" />
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
<!--        <el-tooltip content="Global Size" effect="dark" placement="bottom">-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--          <div>Hello hello</div>-->
<!--        </el-tooltip>-->
      </template>

<!--      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">-->
<!--        <div class="avatar-wrapper">-->
<!--          <img src="../../../assets/logo.png" class="user-avatar" alt="">-->
<!--          <i class="el-icon-caret-bottom" />-->
<!--        </div>-->
<!--        <el-dropdown-menu slot="dropdown">-->
<!--          <router-link to="/">-->
<!--            <el-dropdown-item>Home</el-dropdown-item>-->
<!--          </router-link>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Hamburger from '@/components/hamburger/index.vue'
import Breadcrumb from '@/components/breadcrumb/index.vue'
import HeaderSearch from '@/components/header-search/index.vue'
import Screenfull from '@/components/screenfull/index.vue'
import ErrorLog from '@/components/error-log/index.vue'

export default defineComponent({
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb,
    HeaderSearch,
    Screenfull,
    ErrorLog
  },
  setup() {
    const showSideBar = ref(false)
    const device = ref('pc')

    const toggleSideBar = () => {
      showSideBar.value = !showSideBar.value
    }

    return {
      showSideBar,
      toggleSideBar,
      device
    }
  }
})
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errlog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &.focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
