import { ExtractPropTypes } from 'vue'

export const dropdownItemProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  icon: String
} as const

export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
