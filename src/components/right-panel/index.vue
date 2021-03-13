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
import { defineComponent, onMounted, ref, watch } from 'vue'
import { addClass, removeClass } from '@/utils'

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
  },
  setup(props) {
    let show = ref(true)

    const closeSidebar = (evt: Event) => {
      const parent = evt?.target?.closest('.right-panel')
      if (!parent) {
        show.value = false
        window.removeEventListener('click', closeSidebar)
      }
    }

    const addEventClick = () => {
      window.addEventListener('click', closeSidebar)
    }

    const insertToBody = () => {
      const elx = this.$refs.rightPanel
      const body = document.querySelector('body')
      body!.insertBefore(elx, body!.firstChild)
    }

    watch(show, (newVal: boolean) => {
      if (newVal && !props.clickNotClose) {
        addEventClick()
      }

      if (newVal) {
        addClass(document.body, 'show-right-panel')
      } else {
        removeClass(document.body, 'show-right-panel')
      }
    })

    onMounted(() => {
      insertToBody()
    })
  }
})
</script>

<style scoped>

</style>
