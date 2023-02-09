import { withInstall } from '@bear-ui/utils'
import _Vertual from './src/virtual'
const BVirtualList = withInstall(_Vertual) // ⽣成带有install⽅法的组件
export default BVirtualList // 导出Icon组件
declare module 'vue' {
  export interface GlobalComponents {
    BVirtualList: typeof BVirtualList
  }
}
