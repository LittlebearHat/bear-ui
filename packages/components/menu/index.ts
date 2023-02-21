import _MenuItem from './src/menu-item.vue'
import _Menu from './src/menu.vue'
import _SubMenu from './src/sub-menu.vue'

import { withInstall } from '@bear-ui/utils'
export const BMenuItem = withInstall(_MenuItem)
export const BMenu = withInstall(_Menu)
export const BSubMenu = withInstall(_SubMenu)

export type { MenuItemProps } from './src/menu-item'
export type { MenuProps } from './src/menu'
export type { SubMenuProps } from './src/sub-menu'

export type BMenuInstance = InstanceType<typeof BMenu>

declare module 'vue' {
  export interface GlobalComponents {
    BMenuItem: typeof BMenuItem
    BMenu: typeof BMenu
    BSubMenu: typeof BSubMenu
  }
}
