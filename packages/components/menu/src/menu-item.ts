import { ExtractPropTypes } from 'vue'

export const menuItemProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  icon: String
} as const

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
