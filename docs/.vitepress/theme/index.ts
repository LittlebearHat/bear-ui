import DefaultTheme from 'vitepress/theme'
// 主题样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// import './styles/index.css'

import '@bear-ui/theme-chalk/src/index.scss'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    useComponents(app)
  }
}
