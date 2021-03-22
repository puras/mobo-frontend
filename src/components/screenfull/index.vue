<template>
  <div>
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" @click="click"></svg-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ScreenFull',
  setup() {
    const click = () => {
      console.log('Screenfull click')
    }
    const isFullscreen = ref(false)

    return {
      click,
      isFullscreen
    }
  }
})
</script>

<style lang="less" scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
