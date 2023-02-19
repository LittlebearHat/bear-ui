<template></template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks'
import { base-popoverProps } from './base-popover'
defineOptions({
  name: 'b-base-popover'
})
const bem = createNamespace('base-popover')
const props = defineProps(base-popoverProps)
</script>

<style></style>