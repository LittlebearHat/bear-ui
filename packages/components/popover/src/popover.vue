<template>
  <div
    ref="popoverref"
    v-click-away="closepop"
    :class="bem.b()"
    @focus="getfocus"
    @blur="losefocus"
  >
    <!--    冒泡插槽-->
    <div
      v-if="visible"
      ref="contentref"
      class="absolute transform inline-block bg-white border p-2"
      :class="{
        '-translate-y-full': thisposition === 'top',
        '-translate-x-full': thisposition === 'left'
      }"
    >
      <slot name="content"></slot>
      <!--      那个三角形-->
      <div
        ref="sanjiaoxingref"
        class="absolute transform block bg-white border-t border-l w-2 h-2"
        :class="{
          '-top-1 left-1/2 -translate-x-1/2 rotate-45':
            thisposition === 'bottom',
          '-bottom-1 left-1/2 -translate-x-1/2 -rotate-135':
            thisposition === 'top',
          'top-1/2 -translate-y-1/2 -right-1 rotate-135':
            thisposition === 'left',
          '-left-1 top-1/2 -translate-y-1/2 -rotate-45':
            thisposition === 'right'
        }"
      ></div>
    </div>
    <!--    默认插槽-->
    <span
      ref="triggerref"
      class="inline-block"
      @click.stop="thisonClick()"
    >
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { createNamespace } from '@bear-ui/hooks'
export default defineComponent({
  name: 'BPopover',
  components: {},
  props: {
    // 触发方式
    trigger: {
      type: String,
      default: 'hover',
      // hold的意思是按住鼠标左键不放
      validator(value) {
        return ['hover', 'click', 'focus', 'hold'].indexOf(value) > -1
      }
    },
    // 定位位置
    position: {
      type: String,
      default: 'bottom',
      validator(value) {
        return ['top', 'left', 'bottom', 'right'].indexOf(value) > -1
      }
    }
  },
  setup(prop, context) {
    //defineOptions({ name: 'b-popover' })
    const bem = createNamespace('popover')
    console.log(bem)
    // 三个ref
    const popoverref = ref(null)
    const contentref = ref(null)
    const triggerref = ref(null)
    // 增加一个三角形的ref
    const sanjiaoxingref = ref(null)
    // 是否显示冒泡卡片
    const visible = ref(false)
    // 定位
    const thisposition = ref(prop.position)

    // 最重要的函数，为pop进行定位
    const positionContent = () => {
      document.body.appendChild(contentref.value)
      const { width, height, top, left } =
        triggerref.value.children[0].getBoundingClientRect()
      const width2 = contentref.value.offsetWidth
      const height2 = contentref.value.offsetHeight
      const dingwei = {
        top: {
          top: top + window.scrollY - 5,
          left: left + window.scrollX + width / 2 - width2 / 2
        },
        bottom: {
          top: top + height + window.scrollY + 5,
          left: left + window.scrollX + width / 2 - width2 / 2
        },
        left: {
          top: top + window.scrollY + height / 2 - height2 / 2,
          left: left + window.scrollX - 5
        },
        right: {
          top: top + window.scrollY + height / 2 - height2 / 2,
          left: left + width + window.scrollX + 5
        }
      }
      // contentref.value.style.transform = `translate(${dingwei[prop.position].left}px, ${dingwei[prop.position].top}px)`
      contentref.value.style.left = `${dingwei[prop.position].left}px`
      contentref.value.style.top = `${dingwei[prop.position].top}px`
    }

    // 点击方法
    const thisonClick = () => {
      if (prop.trigger === 'click') {
        if (visible.value === true) {
          closepop()
        } else {
          showpop()
        }
      }
    }
    // 获取焦点方法
    const getfocus = () => {
      if (prop.trigger === 'focus') {
        showpop()
      }
    }
    // 失去焦点方法
    const losefocus = () => {
      if (prop.trigger === 'focus') {
        closepop()
      }
    }
    // 显示
    const showpop = () => {
      // 必须先显示，然后才能获取ref，如果反过来，就获取不到ref
      visible.value = true
      nextTick(() => {
        positionContent()
      })
    }
    // 隐藏
    const closepop = () => {
      let status = false
      contentref.value.addEventListener('mouseenter', () => {
        status = true
      })
      contentref.value.addEventListener('mouseleave', () => {
        visible.value = false
      })
      setTimeout(() => {
        if (!status) {
          visible.value = false
        }
      }, 100)
    }
    // 生命周期
    onMounted(() => {
      // 初始化时，根据触发方式，绑定方法
      if (prop.trigger === 'hold') {
        popoverref.value.addEventListener('mousedown', showpop)
        popoverref.value.addEventListener('mouseup', closepop)
      } else if (prop.trigger === 'hover') {
        popoverref.value.addEventListener('mouseenter', showpop)
        popoverref.value.addEventListener('mouseleave', closepop)
      }
      // 滚动时，不显示pop
      window.addEventListener('scroll', closepop)
      // 窗口大小变化时，不显示pop
      window.addEventListener('resize', closepop)
    })
    onBeforeUnmount(() => {
      // 销毁前，移除监听
      if (prop.trigger === 'hold') {
        popoverref.value.removeEventListener('mousedown', showpop)
        popoverref.value.removeEventListener('mouseup', closepop)
      } else if (prop.trigger === 'hover') {
        popoverref.value.removeEventListener('mouseenter', showpop)
        popoverref.value.removeEventListener('mouseleave', closepop)
      }
      // 所有监听移除
      window.removeEventListener('scroll', closepop)
      window.removeEventListener('resize', closepop)
    })
    return {
      getfocus,
      losefocus,
      thisonClick,
      visible,
      popoverref,
      contentref,
      triggerref,
      thisposition,
      closepop,
      sanjiaoxingref
    }
  }
})
</script>

<style scoped></style>
