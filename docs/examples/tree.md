# Tree 树

划重点，通过树组件渲染原理我们可以学到虚拟 DOM 渲染方式

## 基础用法

对一个树结构进行渲染展示
:::demo

<template #source>
<b-tree :data="data" selectable show-checkbox> </b-tree>
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
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
const data = ref(createData())
</script>

```vue
<template>
  <b-tree :data="data" selectable show-checkbox> </b-tree>
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
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
const data = ref(createData())
</script>
```

:::

## 多选节点

设置 multiple 允许多选
::: demo 312312

```vue
<template>
  <b-tree :data="data" selectable show-checkbox> </b-tree>
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
  if (level === 1) return '儿子'
  return ''
}
const data = ref(createData())
</script>
```

:::
