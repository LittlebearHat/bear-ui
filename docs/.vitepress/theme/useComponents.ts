// 引入自己组件
import BIcon from '@bear-ui/components/icon'
console.log(BIcon)

export function useComponents(app) {
  app.component('BIcon', BIcon)
}
