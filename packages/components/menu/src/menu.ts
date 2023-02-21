import { ExtractPropTypes } from 'vue'

export const menuProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: String,
  hideOnClick: Boolean
} as const

export type MenuProps = ExtractPropTypes<typeof menuProps>
