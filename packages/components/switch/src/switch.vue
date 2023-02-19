<template>
  <div></div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import {
  computed,
  getCurrentInstance,
  nextTick,
  onMounted,
  ref,
  watch,
} from 'vue'
import { isPromise } from '@vue/shared'
import { createNamespace } from '@bear-ui/hooks'
import { isNumber, isString, addUnit } from '@bear-ui/utils'
import { switchProps } from './switch'

defineOptions({
  //自动导入组件
  name: 'b-switch'
})

const bem = createNamespace('switch')
const props = defineProps(switchProps)
</script>