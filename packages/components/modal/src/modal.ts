import {ExtractPropTypes} from "vue"

export const modalProps={
  isShowModal:Boolean,  // 是否显示或隐藏对话框
  title:String,          // 父组件传过来的标题值
  showCloseIcon:Boolean, // 是否显示关闭小图标
  mask:Boolean,          // 是否开启抽屉背景遮罩层
  clickMaskClose:Boolean,// 点击遮罩层关闭
  beforeClose:Function,  // 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作
} as const;

export type ModalProps = ExtractPropTypes<typeof modalProps>