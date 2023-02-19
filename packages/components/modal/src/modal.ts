import {ExtractPropTypes} from "vue"

export const modalProps={
  title:String,          // 父组件传过来的标题值
  visible:Boolean,       // 是否显示
  width:String,          // 组件宽度
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>