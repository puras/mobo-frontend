<template>
  <div :class="{'show': show}" class="header-search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
    <el-select
        ref="headerSearchSelect"
        v-model="search"
        :remote-method="querySearch"
        filterable
        default-first-option
        remote
        placeholder="Search"
        class="header-search-select"
        @change="change"
    >
<!--      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title.join(' > ')" />-->
    </el-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderSearch',
  setup() {
    const show = ref(true)
    const search = ref('')
    // const options = ref({path: '', title: 'test'})

    const click = () => {
      console.log('HeaderSearch click')
    }

    const close = () => {
      console.log('HeaderSearch close')
    }

    const change = () => {
      console.log('HeaderSearch change')
    }

    const querySearch = () => {
      console.log('HeaderSearch querySearch')
    }

    return {
      show,
      search,
      // options,
      click,
      close,
      change,
      querySearch
    }
  }
})
</script>

<style lang="less" scoped>
.header-search {
  font-size: 0 !important;

  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }

  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
