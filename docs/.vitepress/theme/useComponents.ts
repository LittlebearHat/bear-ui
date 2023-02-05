// 插件
import bDemo from './components/b-demo.vue'
import { AddCircle, CashOutline } from '@vicons/ionicons5'

// 引入自己组件
import BIcon from '@bear-ui/components/icon'
console.log(BIcon)

export function useComponents(app) {
  app.component('BIcon', BIcon)
  app.component('b-demo', bDemo)
  app.component('AddCircle', AddCircle)
  app.component('CashOutline', CashOutline)
}
