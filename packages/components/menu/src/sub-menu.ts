import { ExtractPropTypes } from 'vue'

export const subMenuProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: String,
  hideOnClick: Boolean
} as const

export type SubMenuProps = ExtractPropTypes<typeof subMenuProps>
