<template>
  <b-tree
    :data="data"
    selectable
    show-checkbox
    :default-checked-keys="['40']"
    multiple="true"
  >
  </b-tree>
</template>

<script setup>
import { ref } from 'vue'
function createData(level = 4, parentKey = '') {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level) {
  if (level === 4) return '老祖宗'
  if (level === 3) return '爷爷'
  if (level === 2) return '父亲'
  if (level === 1) return '儿孙'
  return ''
}
const data = ref(createData())
</script>
