import _DropdownItem from './src/dropdown-item.vue'
import _DropdownMenu from './src/dropdown-menu.vue'
import _Dropdown from './src/dropdown.vue'

import { withInstall } from '@bear-ui/utils'
export const BDropdownItem = withInstall(_DropdownItem)
export const BDropdownMenu = withInstall(_DropdownMenu)
export const BDropdown = withInstall(_Dropdown)

export type { DropdownItemProps } from './src/dropdown-item'
export type { DropdownProps } from './src/dropdown'

export type BDropdownInstance = InstanceType<typeof BDropdown>

declare module 'vue' {
  export interface GlobalComponents {
    BDropdownItem: typeof BDropdownItem
    BDropdownMenu: typeof BDropdownMenu
    BDropdown: typeof BDropdown
  }
}
