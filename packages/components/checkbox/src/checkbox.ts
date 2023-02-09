import { isBoolean } from '@bear-ui/utils'
import { ExtractPropTypes } from 'vue'
import { PropType } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: [Boolean, Number, String] as PropType<boolean | number | string>
  },
  label: {
    type: [Boolean, Number, String] as PropType<boolean | number | string>
  },
  indeterminate: Boolean,
  disabled: Boolean
} as const
export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>
export const checkboxEmits = {
  'update:modelValue': (value: boolean | number | string) => isBoolean(value),
  change: (value: boolean) => isBoolean(value)
}
export type checkboxEmits = typeof checkboxEmits
