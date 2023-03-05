export * from './icon'
export * from './drawer'
export * from './avatar'
export * from './tree'
export * from './pagination'

import BAvatar from '@bear-ui/components/avatar'
import BIcon from '@bear-ui/components/icon'
import BTree from '@bear-ui/components/tree'
import BCheckBox from '@bear-ui/components/checkbox'
import BPagination from '@bear-ui/components/pagination'
import '@bear-ui/theme-chalk/src/index.scss'
const plugins = [BAvatar, BIcon, BTree, BCheckBox, BPagination]

export default plugins
