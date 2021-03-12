<template>
  <div ref="rightPanel" :class="{show: show}" class="right-panel-container">
    <div class="right-panel-background" />
    <div class="right-panel">
      <div class="handle-button" :style="{'top': buttonTop + 'px', 'background-color': theme}" @click="show = !show">
        <i :class="show ? 'el-icon-close': 'el-icon-setting'" />
      </div>
      <div class="right-panel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightPanel',
  props: {
    clickNotClose: {
      default: false,
      type: Boolean
    },
    buttonTop: {
      default: 250,
      type: Number
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    theme(): string {
      return 'black'
    }
  }
})
</script>

<style scoped>

</style>
