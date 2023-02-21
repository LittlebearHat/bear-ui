<template>
  <div
    :class="[bem.b(), bem.is('disabled', disabled)]"
    :disabled="disabled"
    @click="closeList"
  >
    <div :class="[bem.e('icon')]">
      <b-icon v-if="props.icon">
        <component :is="props.icon" />
      </b-icon>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { dropdownItemProps } from './dropdown-item'
defineOptions({
  name: 'b-dropdown-item'
})
const bem = createNamespace('dropdown-item')
const props = defineProps(dropdownItemProps)
const emits = defineEmits(['close'])
const closeList = () => {
  emits('close')
  console.log(11)
}
</script>

<style lang="scss" scoped></style>
