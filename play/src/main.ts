import { createApp } from 'vue'
import App from './App.vue'
import '@bear-ui/theme-chalk/src/index.scss'
import BDrawer from '@bear-ui/components/drawer'
import BModal from '@bear-ui/components/modal'
import BIcon from '@bear-ui/components/icon'
import Button from '@bear-ui/components/button'
import BTree from '@bear-ui/components/tree'
import BCheckBox from '@bear-ui/components/checkbox'
import BPagination from '@bear-ui/components/pagination'
import BUpload from '@bear-ui/components/upload'
import BCalendar from '@bear-ui/components/calendar'
import BInput from '@bear-ui/components/input'
import {BFormItem,BForm}from '@bear-ui/components/form'

const plugins = [BIcon, BDrawer, BModal, Button, BTree, BCheckBox, BPagination,BUpload,BCalendar,BFormItem,BForm,BInput]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
