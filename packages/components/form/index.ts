import { withInstall } from '@bear-ui/utils'
import _FormItem from './src/form-item.vue'
import _Form from './src/form.vue'

const BFormItem = withInstall(_FormItem)
const BForm = withInstall(_Form)

export { BFormItem, BForm }

export default {}

export type { FormItemProps } from './src/form-item'
export type { FormProps } from './src/form'

export type FormInstance = InstanceType<typeof BForm>

declare module 'vue' {
  export interface GlobalComponents {
    BFormItem: typeof BFormItem
    BForm: typeof BForm
  }
}
