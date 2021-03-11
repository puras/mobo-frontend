<template>
  <div>
    <logo :collapse="collapse" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './logo.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Logo
  },
  data() {
    return {
      collapse: false
    }
  }
})
</script>

<style scoped>

</style>
