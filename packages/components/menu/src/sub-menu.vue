<template>
  <div :disabled="disabled" :class="[bem.b(), bem.is('disabled', 'disabled')]">
    <div @click="changeShowSubMenu" :class="[bem.e('title')]">
      <slot name="title"></slot>
    </div>
    <Transition>
      <div :class="[bem.e('submenu')]" v-if="showSubMenu">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { subMenuProps } from './sub-menu'

import { ref } from 'vue'
defineOptions({
  name: 'b-sub-menu'
})
const bem = createNamespace('sub-menu')
const props = defineProps(subMenuProps)

const showSubMenu = ref(false)
const changeShowSubMenu = () => {
  if (props.disabled) return
  showSubMenu.value = !showSubMenu.value
}
</script>

<style lang="scss" scoped></style>
