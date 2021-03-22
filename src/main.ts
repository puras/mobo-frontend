import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/less/index.less'
import router from './router'
import store, { key } from './store'

import SvgIcon from '@/components/svg-icon/index.vue'

createApp(App)
  .component('svg-icon', SvgIcon)
  .use(ElementPlus)
  .use(store, key)
  .use(router)
  .mount('#app')
