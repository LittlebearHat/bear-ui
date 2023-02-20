import _Popover from './src/popover.vue'
import { withInstall } from '@bear-ui/utils'

const BPopover = withInstall(_Popover)

export default BPopover

export * from './src/popover'

declare module 'vue' {
  export interface GlobalComponents {
    BPopover: typeof BPopover
  }
}
