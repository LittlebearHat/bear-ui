import { iconProps } from '@bear-ui/components/icon/src/icon'
import { ExtractPropTypes, PropType } from 'vue'

export const avatarProps = {
  size: String,
  shape: {
    type: String,
    values: ['circle', 'square'],
    default: 'circle'
  },
  icon: {
    type: iconProps
  },
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  srcSet: {
    type: String,
    default: ''
  }
} as const
export type avatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
  error: (evt: Event) => evt instanceof Event
}
export type AvatarEmits = typeof avatarEmits
