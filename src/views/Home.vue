<template>
  <div class="home">
    Hello world
    <br/>
    {{ counter }}
    <br/>
    {{ theCounter }}
    <br>
    {{count}}

    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <el-row>
      <el-button @click="doClick">默认按钮</el-button>
      <el-button type="primary" @click="doInc">主要按钮</el-button>
      <el-button type="success" @click="doDec">成功按钮</el-button>
      <el-button type="info" @click="doSet">信息按钮</el-button>
      <el-button type="warning" @click="doReset">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import useCount from '@/views/UseCount'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    console.log('Hello world')
    const { current: count, inc, dec, set, reset } = useCount(1, {
      min: 1, max: 100
    })
    const counter = ref(0)
    const theCounter = computed(() => counter.value * 2)

    watch(counter, (newValue: number, oldValue: number) => {
      console.log('NewValue: ' + newValue + ', OldValue: ' + oldValue)
    })

    console.log(counter)
    console.log(counter.value)
    console.log(theCounter.value)

    counter.value++
    console.log(counter.value)
    console.log(theCounter.value)

    return {
      counter,
      theCounter,
      count,
      inc, dec, set, reset
    }
  },
  methods: {
    doClick() {
      console.log(this.counter)
      this.counter++
    },
    doInc() {
      this.inc(10)
    },
    doDec() {
      this.dec(10)
    },
    doSet() {
      this.set(99)
    },
    doReset() {
      this.reset()
    }
  }
})
</script>

<style scoped>

</style>
