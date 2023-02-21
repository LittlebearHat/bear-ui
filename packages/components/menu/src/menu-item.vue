<template>
  <div :disabled="disabled" :class="[bem.b(), bem.is('disabled', disabled)]">
    <slot></slot>
  </div>
</template>

<script setup>
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { menuItemProps } from './menu-item'
defineOptions({
  name: 'b-menu-item'
})
const bem = createNamespace('menu-item')
const props = defineProps(menuItemProps)
</script>

<style lang="scss" scoped></style>
