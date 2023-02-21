import DefaultTheme from 'vitepress/theme'

//import './styles/index.css'

import '@bear-ui/theme-chalk/src/index.scss'
import { useComponents } from './useComponents'
import { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    useComponents(app)
  }
}
