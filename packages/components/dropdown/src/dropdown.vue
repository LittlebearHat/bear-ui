<template>
  <div
    :class="[bem.b(), bem.is('disabled', disabled)]"
    @[props.trigger]="changeShowDropdown"
  >
    <div :class="[bem.e('link')]">
      <slot></slot>
    </div>

    <Transition :class="[bem.e('dropdownmenu')]">
      <slot name="dropdown"></slot>
    </Transition>
  </div>
</template>

<script setup>
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { dropdownProps } from './dropdown'
import { ref, provide } from 'vue'

defineOptions({
  name: 'b-dropdown'
})
const bem = createNamespace('dropdown')
const props = defineProps(dropdownProps)
const showDropdown = ref(false)
let timer = null

const changeShowDropdown = () => {
  if (props.disabled) return
  if (props.trigger == 'mouseover') {
    if (timer) return
    timer = setTimeout(() => {
      showDropdown.value = !showDropdown.value
      timer = null
    }, props.timeout)
  }

  showDropdown.value = !showDropdown.value
  console.log(showDropdown.value)
}
provide('showDropdown', showDropdown)
</script>

<style lang="scss" scoped></style>
