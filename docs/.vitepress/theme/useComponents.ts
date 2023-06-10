import BButton from '@bear-ui/components/button'
// 插件
import bDemo from './components/b-demo.vue'
import { AddCircle, CashOutline } from '@vicons/ionicons5'

// 引入自己组件
import BAvatar from '@bear-ui/components/avatar'
import BIcon from '@bear-ui/components/icon'

import BInput from '@bear-ui/components/input'
import BCalendar from '@bear-ui/components/calendar'
import BTree from '@bear-ui/components/tree'
import { BMenu, BMenuItem, BSubMenu } from '@bear-ui/components/menu'
import {
  BDropdown,
  BDropdownItem,
  BDropdownMenu
} from '@bear-ui/components/dropdown'
import BPagination from '@bear-ui/components/pagination'
export function useComponents(app) {
  app.component('BAvatar', BAvatar)
  app.component('BButton', BButton)
  app.component('BIcon', BIcon)
  app.component('BTree', BTree)
  app.component('BMenu', BMenu)
  app.component('BMenuItem', BMenuItem)
  app.component('BSubMenu', BSubMenu)
  app.component('BDropdown', BDropdown)
  app.component('BDropdownItem', BDropdownItem)
  app.component('BDropdownMenu', BDropdownMenu)
  app.component('BPagination', BPagination)
  app.component('BDemo', bDemo)
  app.component('AddCircle', AddCircle)
  app.component('CashOutline', CashOutline)
  app.component('BCalendar', BCalendar)
  app.component('BInput',BInput)
}
