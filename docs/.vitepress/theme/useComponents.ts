// 插件
import bDemo from './components/b-demo.vue'
import { AddCircle, CashOutline } from '@vicons/ionicons5'

// 引入自己组件
import BAvatar from '@bear-ui/components/avatar'
import BIcon from '@bear-ui/components/icon'
import BTree from '@bear-ui/components/tree'
import { BMenu, BMenuItem, BSubMenu } from '@bear-ui/components/menu'
import {
  BDropdown,
  BDropdownItem,
  BDropdownMenu
} from '@bear-ui/components/dropdown'

export function useComponents(app) {
  app.component('BAvatar', BAvatar)
  app.component('BIcon', BIcon)
  app.component('BTree', BTree)
  app.component('BMenu', BMenu)
  app.component('BMenuItem', BMenuItem)
  app.component('BSubMenu', BSubMenu)
  app.component('BDropdown', BDropdown)
  app.component('BDropdownItem', BDropdownItem)
  app.component('BDropdownMenu', BDropdownMenu)

  app.component('BDemo', bDemo)
  app.component('AddCircle', AddCircle)
  app.component('CashOutline', CashOutline)
}
