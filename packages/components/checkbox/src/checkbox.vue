<template>
  <label :class="bem.b()">
    <span :class="bem.e('input')"><input
      ref="inputRef"
      v-model="model"
      type="checkbox"
      :value="label"
      :disabled="disabled"
      @change="handleChange"
    /></span>
    <span
      v-if="$slots.default || label"
      :class="bem.e('label')"
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed } from '@vue/reactivity'
import { createNamespace } from '@bear-ui/hooks'
import { checkboxEmits, checkboxProps } from './checkbox'
import { ref, watch, onMounted } from 'vue'
const bem = createNamespace('checkbox')
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

defineOptions({ name: 'b-checkbox' })
const model = computed<any>({
  get() {
    return props.modelValue
  },
  set(val) {
    return emit('update:modelValue', val)
  }
})
const inputRef = ref<HTMLInputElement>()
function indeterminate(val: boolean) {
  // console.log(inputRef)
  inputRef.value!.indeterminate = val
}
function handleChange(e: Event) {
  const target = e.target as HTMLInputElement
  console.log('111', target.checked)
  const value = target.checked ? true : false
  emit('change', value)
}
watch(() => props.indeterminate, indeterminate)
onMounted(() => {
  indeterminate(props.indeterminate)
})
</script>
