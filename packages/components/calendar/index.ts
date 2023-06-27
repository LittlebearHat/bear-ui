import _Calendar from './src/calendar.vue'

import { withInstall } from '@bear-ui/utils'

export const BCalendar = withInstall(_Calendar)

export default BCalendar  //app.use(Calendar)

declare module 'vue' {
  export interface GlobalComponents {
    BCalendar: typeof BCalendar
  }
}
export * from './src/calendar'
