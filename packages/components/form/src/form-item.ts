// form-item 这里用来定义 formitem中所需要的属性
// prop 校验的输入框的属性
// label属性 输入框的标题
// rules 表单输入的框的规则
// show-message 是否显示错误 ：true

// change / blur 事件

import type { RuleItem } from 'async-validator'
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type Arrayable<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

export const formItemValidateState = ['success', 'error', ''] as const
export type FormItemValidateState = (typeof formItemValidateState)[number]

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<Arrayable<FormItemRule>>,
  showMessage: {
    type: Boolean,
    default: true
  }
} as const

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<any>
}

export const FormItemContextKey: InjectionKey<FormItemContext> =
  Symbol('form-item')
