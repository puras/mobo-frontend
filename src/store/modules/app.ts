/**
 * @project mobo-frontend
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-23 22:46
 */
import { Module } from 'vuex'
import { AppStateTypes, RootStateTypes } from '@/store/interface'
// import Cookies from 'js-cookie'

const appModule: Module<AppStateTypes, RootStateTypes> = {
  namespaced: process.env.NODE_ENV !== 'production',
  state: {
    sidebar: {
      opened: false,// Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : true,
      withoutAnimation: false
    },
    device: 'desktop',
    size: 'medium'//Cookies.get('size') || 'medium'
  },
  mutations: {
    TOGGLE_SIDEBAR: (state: AppStateTypes) => {
      console.log(state.sidebar.opened)
      console.log('in TOGGLE_SIDEBAR')
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      console.log(state.sidebar.opened)
      // if (state.sidebar.opened) {
      //   Cookies.set('sidebarStatus', '1')
      // } else {
      //   Cookies.set('sidebarStatus', '0')
      // }
    },
    CLOSE_SIDEBAR: (state: AppStateTypes, withoutAnimation: boolean) => {
      // Cookies.set('sidebarStatus', '0')
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state: AppStateTypes, device: string) => {
      state.device = device
    },
    SET_SIZE: (state: AppStateTypes, size: string) => {
      state.size = size
      // Cookies.set('size', size)
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      console.log('in action toggleSidebar')
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, withoutAnimation: boolean) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({ commit }, size) {
      commit('SET_SIZE', size)
    }
  }
}

export default appModule
