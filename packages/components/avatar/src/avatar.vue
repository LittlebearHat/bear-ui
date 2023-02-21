<template>
  <span
    :class="avatarClass"
    :style="sizeStyle"
  >
    <img
      v-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :alt="alt"
      :srcset="srcSet"
      @error="handleError"
    />
    <b-icon v-else-if="icon">
      <component :is="icon" />
    </b-icon>
    <slot v-else />
  </span>
</template>


<script setup lang="ts" name="BAvatar">
import { ref, computed, watch } from 'vue'
import type { CSSProperties } from 'vue'
import { createNamespace } from '@bear-ui/hooks'
import { isNumber, isString, addUnit } from '@bear-ui/utils'
import { avatarProps, avatarEmits } from './avatar'

defineOptions({
  //自动导入组件
  name: 'b-avatar'
})
const bem = createNamespace('avatar')
const props = defineProps(avatarProps)
const emit = defineEmits(avatarEmits)

const hasLoadError = ref(false)

const avatarClass = computed(() => {
  const { size, icon, shape } = props
  const classList = [bem.b()]
  if (isString(size)) classList.push(bem.m(size))
  if (icon) classList.push(bem.m('icon'))
  if (shape) classList.push(bem.m(shape))
  return classList
})

const sizeStyle = computed(() => {
  const { size } = props

  return isNumber(size)
    ? (bem.cssVarBlock({
      size: addUnit(size) || '',
    }) as CSSProperties)
    : undefined
})

watch(
  () => props.src,
  () => (hasLoadError.value = false)
)

function handleError(e: Event) {
  hasLoadError.value = true
  emit('error', e)
}
</script>

<style></style>
