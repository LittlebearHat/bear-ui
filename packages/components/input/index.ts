import _Input from './src/input.vue'

import { withInstall } from '@bear-ui/utils'

export const BInput = withInstall(_Input)

export default BInput  //app.use(Calendar)

declare module 'vue' {
  export interface GlobalComponents {
    BCalendar: typeof BInput
  }
}
export * from './src/input'
