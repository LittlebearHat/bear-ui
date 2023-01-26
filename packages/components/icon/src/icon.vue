<template>
  <i
    :class="bem.b()"
    :style="style"
  >
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { iconProps } from './icon'
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { isUndefined, addUnit } from '@bear-ui/utils'
defineOptions({
  //自动导入组件
  name: 'b-icon'
})
const bem = createNamespace('icon')
console.log(bem)
const props = defineProps(iconProps)
const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}
  return {
    // ...(size?{"font-size":size+ "px"}:{}),
    // ...(color?{color:color}:{})
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    color: color
  }
})
</script>

<style></style>
