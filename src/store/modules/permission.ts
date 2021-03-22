import { RouteRecordRaw } from 'vue-router'

/**
 * @project mobo-frontend
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-22 12:29
 */
function hasPermission(roles: string[], route: RouteRecordRaw): boolean {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta?.roles?.includes(role))
  } else {
    return true
  }
}

export function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  // SET_ROUTES: (state, routes) => {
  //   state.addRoutes = routes
  //   state.routes = contantRoutes.concat(routes)
  // }
}

const actions = {
  // generateRoutes({ commit }, roles) {
  //   return new Promise(resolve => {
  //     let accessedRoute
  //     if (roles.includes('admin')) {
  //       accessedRoute = asyncRoutes || []
  //     } else {
  //       accessedRoute = filterAsyncRoutes(asyncRoutes, roles)
  //     }
  //
  //     commit('SET_ROUTES', accessedRoute)
  //     resolve(accessedRoute)
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
