import DefaultTheme from 'vitepress/theme'

import BIcon from "@bear-ui/components/icon";
import "@bear-ui/theme-chalk/src/index.scss";

console.log(BIcon)
export default {
  ...DefaultTheme,
  enhanceApp({
    app
  }) {
    app.use(BIcon) // 在vitepress中 注册全局组件
  }
}