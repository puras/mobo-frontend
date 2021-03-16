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
import { defineComponent, ref, watch } from 'vue'
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

    watch(show, (newVal: boolean) => {
      console.log(newVal)
      if (newVal && !props.clickNotClose) {
        addEventClick()
      }

      if (newVal) {
        addClass(document.body, 'show-right-panel')
      } else {
        removeClass(document.body, 'show-right-panel')
      }
    })
  }
})
</script>

<style lang="less" scoped>
.right-panel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .2);
  z-index: -1;
}

.right-panel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);

  .right-panel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .right-panel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;
  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
