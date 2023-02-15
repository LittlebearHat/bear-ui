<template>
  <div :class="bem.b()">
    <button
      :disabled="disablePrev"
      @click="prevPage"
    >
      上一页
    </button>
    <Pager
      ref="pager"
      :total="props.total"
      :page-size="props.pageSize"
      :pager-count="props.pagerCount"
    ></Pager>
    <button
      :disabled="disableNext"
      @click="nextPage"
    >
      下一页
    </button>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks'
import { paginationProps, PaginationProps } from './pagination'
import { ref, computed, onMounted, watch } from 'vue'
import Pager from './pager.tsx'
defineOptions({
  name: 'b-pagination'
})
const bem = createNamespace('pagination')
const props = defineProps(paginationProps)
console.log('23123', props)
const emit = defineEmits(['update:modelValue'])
const pager = ref()
console.log('pager', pager)
const disablePrev = computed(() =>
  pager.value ? pager.value.pageIndex < 2 : true
)
const disableNext = computed(() =>
  pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
)
const prevPage = () => {
  console.log('jinyong', disablePrev.value)
  pager.value.prevPage()
}
const nextPage = () => {
  pager.value.nextPage()
}
onMounted(() => {
  watch(
    () => pager.value.pageIndex,
    (newVal: number) => {
      emit('update:modelValue', newVal)
    }
  )
  watch(
    () => props.modelValue,
    (newVal: number) => {
      pager.value.pageIndex = newVal
    }
  )
})
</script>

<style></style>
