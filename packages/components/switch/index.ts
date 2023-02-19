import _switch from '../switch/src/switch.vue'
import { withInstall } from '@bear-ui/utils'
export const BSwitch = withInstall(_switch)

export default BSwitch
export * from './src/switch'
declare module 'vue' {
  export interface GlobalComponents {
    // 我们的接口可以自动合并
    BSwitch: typeof BSwitch
  }
}
