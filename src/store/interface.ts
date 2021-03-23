/**
 * @project mobo-frontend
 * @author <a href="mailto:he@puras.cn">Puras.He</a>
 * @date 2021-03-22 17:24
 */
interface RootStateTypes {
  test: string,
  name: string
}

interface AppStateSidebar {
  opened: boolean,
  withoutAnimation: boolean
}

interface AppStateTypes {
  sidebar: AppStateSidebar,
  device: string,
  size: string
}

interface PermissionStateTypes {
  routes: string[]
  addRoutes: string[]
}

interface SettingStateTypes {
  theme: string,
  showSetting: boolean,
  fixedHeader: boolean,
  sidebarLogo: string
}

interface UserStateTypes {
  token: string,
  name: string,
  avatar: string,
  introduction: string,
  roles: string[]
}

interface AllStateTypes extends RootStateTypes {
  app: AppStateTypes
}

export {
  RootStateTypes,
  AppStateTypes,
  PermissionStateTypes,
  SettingStateTypes,
  AllStateTypes
}
