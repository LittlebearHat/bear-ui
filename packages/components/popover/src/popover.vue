<template>
<div></div>
</template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks'
import { popoverProps } from './popover'
defineOptions({
  name: 'b-popover'
})
const bem = createNamespace('popover')
const props = defineProps(popoverProps)
</script>

<style></style>