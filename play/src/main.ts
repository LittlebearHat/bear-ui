import { createApp } from 'vue'
import App from './App.vue'
import '@bear-ui/theme-chalk/src/index.scss'

import BIcon from '@bear-ui/components/icon'
import BButton from '@bear-ui/components/button'
import BTree from '@bear-ui/components/tree'
import BCheckBox from '@bear-ui/components/checkbox'
import BPagination from '@bear-ui/components/pagination'

const plugins = [BIcon, BButton, BTree, BCheckBox, BPagination]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
