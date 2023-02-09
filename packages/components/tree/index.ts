import _Tree from './src/tree.vue'
import { withInstall } from '@bear-ui/utils'
export const BTree = withInstall(_Tree)
export default BTree
declare module 'vue' {
  export interface GlobalComponents {
    BTree: typeof BTree
  }
}
export * from './src/tree'
