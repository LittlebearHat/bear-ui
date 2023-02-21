<template>
  <div :class="[bem.b()]">
    <slot></slot>
  </div>
</template>

<script setup>
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { menuProps } from './menu'

defineOptions({
  name: 'b-menu'
})
const bem = createNamespace('menu')
const props = defineProps(menuProps)
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>
