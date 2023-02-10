<template>
  <!-- 打开弹框的动画 -->
  <transition name="modalMove">
    <div
      v-show="isShowModal"
      class="modalBox"
      :class="{ isShowMask: mask == true }"
      @click="clickMaskCloseFn"
    >
      <div
        class="modalBoxContent"
        @click.stop
      >
        <div class="headhead">
          <!-- 这样写可以做到若有传递过来的title就用传递过来的title
          若有传递过来的插槽，就以插槽的为准 -->
          <slot name="header">
            <span>{{ title }}</span>
          </slot>
          <i
            v-show="showCloseIcon"
            @click="close"
          >
            close
          </i>
        </div>
        <div class="bodybody">
          <!-- 内容区我们也使用命名插槽 -->
          <slot name="body"></slot>
        </div>
        <div class="footfoot">
          <!-- 底部使用命名插槽 -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
// import BIcon from '@bear-ui/components/icon'
import { modalProps } from './modal'
import { createNamespace } from '@bear-ui/hooks/use-namespace'
const emit = defineEmits(['update:isShowModal','shutDown'])
const props = defineProps(modalProps)
defineOptions({
  name: 'b-modal'
})
const bem = createNamespace('modal')

// 点击遮罩层关闭弹框
function clickMaskCloseFn() {
  if (props.clickMaskClose == true) {
    closeModal();
  } else {
    /* 这里要控制一下冒泡事件，注意第十行使用@click.stop
        不控制冒泡的话，点击内容区也会导致弹出框关闭*/
    return;
  }
}
// 准备关闭抽屉弹出框
function closeModal() {
  // 若传递了beforeClose函数，就抛出关闭函数，供外部使用
  if (props.beforeClose) {
    props.beforeClose(close);
  }
  // 没有beforeClose函数，直接关闭即可
  else {
    close();
  }
}
// 关闭抽屉弹出框
function close() {
  emit("update:isShowModal", false); // 关闭
  emit("shutDown"); // 并抛出一个shutDown通知事件
}
</script>

<style lang="scss" scoped>
</style>