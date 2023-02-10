import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BIcon from '@bear-ui/components/icon'
import BDrawer from '@bear-ui/components/drawer'
import '@bear-ui/theme-chalk/src/index.scss'
const plugins = [BIcon,BDrawer]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
