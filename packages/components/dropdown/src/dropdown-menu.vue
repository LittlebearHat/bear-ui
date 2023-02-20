<template>
  <div v-show="showDropdown" :class="[bem.b()]">
    <slot @close="closeList"></slot>
    <b-dropdown-item @close="closeList">Action 1</b-dropdown-item>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { createNamespace } from '@bear-ui/hooks/use-namespace'

defineOptions({
  name: 'b-dropdown-menu'
})
const bem = createNamespace('dropdown-menu')

const showDropdown = inject('showDropdown')
const closeList = () => {
  showDropdown.value = false
}
console.log(showDropdown.value)
</script>

<style lang="scss" scoped></style>
