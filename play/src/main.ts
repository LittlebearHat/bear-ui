import { createApp } from 'vue'
import App from './App.vue'
import BIcon from '@bear-ui/components/icon'
import BTree from '@bear-ui/components/tree'
import BCheckBox from '@bear-ui/components/checkbox'
import BPagination from '@bear-ui/components/pagination'
import '@bear-ui/theme-chalk/src/index.scss'
const plugins = [BIcon, BTree, BCheckBox, BPagination]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
