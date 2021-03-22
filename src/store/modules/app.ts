/**
 * @project mobo-frontend
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-22 12:29
 */
import Cookies from 'js-cookie'

interface AppStateSidebar {
  opened: boolean,
  withoutAnimation: boolean
}

interface AppStateTypes {
  sidebar: AppStateSidebar,
  device: string,
  size: string
}

const state: AppStateTypes = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  size: Cookies.get('size') || 'medium'
}

const mutations = {
  TOGGLE_SIDEBAR: (state: AppStateTypes) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', '1')
    } else {
      Cookies.set('sidebarStatus', '0')
    }
  },
  CLOSE_SIDEBAR: (state: AppStateTypes, withoutAnimation: boolean) => {
    Cookies.set('sidebarStatus', '0')
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state: AppStateTypes, device: string) => {
    state.device = device
  },
  SET_SIZE:(state: AppStateTypes, size: string) => {
    state.size = size
    Cookies.set('size', size)
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation: boolean }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  setSize({ commit }, size) {
    commit('SET_SIZE', size)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
