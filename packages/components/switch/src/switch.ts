import { ExtractPropTypes } from 'vue'
import { iconProps } from '@bear-ui/components/icon/src/icon'

export const switchProps = {
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: ''
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: iconProps
  },
  inactiveIcon: {
    type: iconProps
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeColor: {
    type: String,
    default: ''
  },
  inactiveColor: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: {},
  size: {
    type: String
  },
  tabindex: {
    type: [String, Number]
  }
} as const
export type switchProps = ExtractPropTypes<typeof switchProps>
