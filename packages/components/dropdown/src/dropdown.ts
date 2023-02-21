import { ExtractPropTypes } from 'vue'

export const dropdownProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String,
    default: 'mouseover'
  },
  timeout: {
    type: Number,
    default: 2000
  },
  hideOnClick: Boolean
} as const

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
