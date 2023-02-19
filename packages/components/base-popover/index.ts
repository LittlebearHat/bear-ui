import _Base-popover from './src/base-popover'
import { withInstall } from '@bear-ui/utils'

const BBase-popover = withInstall(_Base-popover)

export default BBase-popover

export * from './src/base-popover'

declare module 'vue' {
  export interface GlobalComponents {
    BBase-popover: typeof BBase-popover
  }
}
