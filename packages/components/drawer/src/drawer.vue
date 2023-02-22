<template>
  <!-- 抽屉打开关闭过渡效果根据name去指定computedName.moveObj -->
  <transition :name="computedName.moveObj">
    <!-- clickMaskCloseFn搭配@click.stop -->
    <div
      v-show="isShowDrawer"
      :class="[bem.b(),{ isShowDrawerMask: mask }]"
      @click="clickMaskCloseFn"
    >
      <div
        ref="drawerContentRef"
        :class="bem.e('content')"
        :style="computedDrawerPosition"
        @click.stop
      >
        <header
          v-show="isShowHeader"
          class="drawerHeader"
        >
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <i
            v-show="showCloseIcon"
            class="close"
            @click="closeDrawer"
          >
            close
          </i>
        </header>
        <section class="drawerBody">
          <slot></slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { drawerProps } from './drawer'
import { computed } from 'vue'
import { createNamespace } from '@bear-ui/hooks/use-namespace'
const emit = defineEmits(['update:isShowDrawer','shutDown'])
interface MoveobjType{
  [top:string]: string,
  bottom: string,
  left: string,
  right: string,
}
const moveObj : MoveobjType= {
  top: "topMove",
  bottom: "bottomMove",
  left: "leftMove",
  right: "rightMove",
};
const props = defineProps(drawerProps)
// console.log(props)
defineOptions({
  name: 'b-drawer'
})
const bem = createNamespace('drawer')
console.log(bem.be('wrap','content'))

const computedDrawerPosition = computed(() => {
  interface positionObjType{
    [width:string]: string,
    height: string,
  }
  const positionObj :positionObjType= {
    width:
      (props.direction == "left") || (props.direction == "right")
        ? "30%"
        : "100%",
    height:
      (props.direction == "top") || (props.direction == "bottom")
        ? "30%"
        : "100%",
  };
  const dir = typeof props.direction!== 'undefined'? props.direction : "";
  positionObj[dir] = "0";//top = 0 位置在上方
  console.log(positionObj)
  return positionObj;
})

const computedName = computed(() => {
  // switch props.direction:
  //   case 
  return {
    moveObj : typeof props.direction!== 'undefined'? moveObj[props.direction] : ""
  }
  
})

// 点击遮罩层关闭弹框
function clickMaskCloseFn() {
  if (props.clickMaskClose == true) {
    closeDrawer();
  } else {
    /* 这里要控制一下冒泡事件，注意第十行使用@click.stop
        不控制冒泡的话，点击内容区也会导致弹出框关闭*/
    return;
  }
}
// 准备关闭抽屉弹出框
function closeDrawer() {
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
  emit("update:isShowDrawer", false); // 关闭
  emit("shutDown"); // 并抛出一个shutDown通知事件
}



</script>

<style  scoped>
/* 
.myDrawerWrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;

}
.myDrawerWrap .drawerContent {
  position: absolute;
  background-color: #fff;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.24);
  display: flex;
  flex-direction: column;


}

.myDrawerWrap .drawerContent .drawerHeader {
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  color: #333;
}
.myDrawerWrap .drawerContent .drawerHeader i {
  cursor: pointer;
}

.myDrawerWrap .drawerContent .drawerBody {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  flex: 1;
  overflow-y: auto;
}

.isShowDrawerMask {
  background-color: rgba(0, 0, 0, 0.3);
}
/*
  下方是抽屉过渡动画的重点
*/

/* .topMove-enter-active,
.topMove-leave-active {
  transition: all 0.36s ease-in-out;
  transform: translateY(0%);
  opacity: 1;
}
.topMove-enter,
.topMove-leave {
  transform: translateY(-100%);
  opacity: 0;
}
.topMove-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.bottomMove-enter-active,
.bottomMove-leave-active {
  transition: all 0.36s ease-in-out;
  transform: translateY(0);
  opacity: 1;
}
.bottomMove-enter,
.bottomMove-leave {
  transform: translateY(100%);
  opacity: 0;
}
.bottomMove-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.leftMove-enter-active,
.leftMove-leave-active {
  transition: all 0.36s ease-in-out;
  transform: translateX(0%);
  opacity: 1;
}
.leftMove-enter,
.leftMove-leave {
  transform: translateX(-100%);
  opacity: 0;
}
.leftMove-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.rightMove-enter-active,
.rightMove-leave-active {
  transition: all 0.36s ease-in-out;
  transform: translateX(0);
  opacity: 1;
}
.rightMove-enter,
.rightMove-leave {
  transform: translateX(100%);
  opacity: 0;
}
.rightMove-leave-to {
  transform: translateX(100%);
  opacity: 0;
} */ 
</style>