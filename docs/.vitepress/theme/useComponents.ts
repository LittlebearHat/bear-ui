// 插件
import bDemo from './components/b-demo.vue'
import { AddCircle, CashOutline } from '@vicons/ionicons5'

// 引入自己组件
import BAvatar from '@bear-ui/components/avatar'
import BIcon from '@bear-ui/components/icon'
import BTree from '@bear-ui/components/tree'

export function useComponents(app) {
  app.component('BAvatar', BAvatar)
  app.component('BIcon', BIcon)
  app.component('BTree', BTree)
  app.component('BDemo', bDemo)
  app.component('AddCircle', AddCircle)
  app.component('CashOutline', CashOutline)
}
