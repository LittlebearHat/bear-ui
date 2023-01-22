// 使用插件
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

// 引入自己组件
import BIcon from '@bear-ui/components/icon'
console.log(BIcon)

export function useComponents(app) {
  app.component('BIcon', BIcon)
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
}
