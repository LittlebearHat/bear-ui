import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BIcon from "@bear-ui/components/icon"
const plugins=[BIcon]
const app=createApp(App)
plugins.forEach((plugin)=>app.use(plugin))
app.mount('#app')
