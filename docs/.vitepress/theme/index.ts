import DefaultTheme from 'vitepress/theme'

// import './styles/index.css'

import '@bear-ui/theme-chalk/src/index.scss'
import { useComponents } from './useComponents'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    useComponents(app)
  }
}
