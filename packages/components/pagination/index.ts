import _Pagination from './src/pagination.vue'
import { withInstall } from '@bear-ui/utils'

const BPagination = withInstall(_Pagination)

export default BPagination

export * from './src/pagination'

declare module 'vue' {
  export interface GlobalComponents {
    BPagination: typeof BPagination
  }
}
