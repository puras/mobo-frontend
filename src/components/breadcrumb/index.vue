<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb" key="key">
      <el-breadcrumb-item>
        <span>首页</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a @click.prevent="handleLink()">测试</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const handleLink = () => {
      console.log('Breadcrumb handle link')
    }

    return {
      handleLink
    }
  }
})
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
