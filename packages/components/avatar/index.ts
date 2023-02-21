import _avatar from '../avatar/src/avatar.vue'
import { withInstall } from '@bear-ui/utils'
export const BAvatar = withInstall(_avatar)

export default BAvatar
export * from './src/avatar'
declare module 'vue' {
  export interface GlobalComponents {
    // 我们的接口可以自动合并
    Bavatar: typeof BAvatar
  }
}
