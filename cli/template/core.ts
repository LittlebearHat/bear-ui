export default function genCoreTemplate(name: string) {
  return `<template></template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks'
import { ${name}Props } from './${name}'
defineOptions({
  name: 'b-${name}'
})
const bem = createNamespace('${name}')
const props = defineProps(${name}Props)
</script>

<style></style>`
}
