import _Upload from './src/upload.vue'
import { withInstall } from '@bear-ui/utils'
export const BUpload = withInstall(_Upload)
export default BUpload
declare module 'vue' {
  export interface GlobalComponents {
    BUpload: typeof BUpload
  }
}
export * from './src/upload'
