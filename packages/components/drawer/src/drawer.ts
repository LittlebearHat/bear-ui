import {ExtractPropTypes,PropType} from "vue"

export const drawerProps={
    isShowDrawer:Boolean,  // 是否显示抽屉
    isShowHeader:Boolean,  // 是否显示抽屉头部内容
    title:String,          // 父组件传过来的抽屉标题值
    showCloseIcon:Boolean, // 是否显示关闭小图标
    mask:Boolean,          // 是否开启抽屉背景遮罩层
    clickMaskClose:Boolean,// 点击遮罩层关闭
    direction:String as PropType<string>,      // 校验抽屉的4个方向 as PropType<string>
    beforeClose:Function,  // 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作
} as const;

export type DrawerProps = ExtractPropTypes<typeof drawerProps>