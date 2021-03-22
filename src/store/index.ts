/**
 * @project kufo
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-11 17:20
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import RootStateTypes from '@/store/interface'
import { InjectionKey } from 'vue'

export default createStore<RootStateTypes>({
  state: {
    test: 'Hello typescript'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// export function useStore() {
//   return baseUseStore(key)
// }

// const modulesFiles = require.context('./modules', true, /\.ts$/)
// const modules = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   const value = modulesFiles(modulePath)
//   modules[moduleName] = value.default
//   return modules
// }, {})
//
// export default createStore({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })
