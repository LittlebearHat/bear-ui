<script setup>
  import tree from './tree.vue'
</script>

# Tree 树

划重点，通过树组件渲染原理我们可以学到虚拟 DOM 渲染方式

## 基础用法

对一个树结构进行渲染展示
:::demo

<template #source>
<tree></tree>
</template>

```vue
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
```

:::
:::demo

<template #source>
<tree></tree>
</template>

```vue
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
```

:::

## API

### Tree Props

| 属性名                | 说明                                                                                                                    | 类型                          | 可选值 | 默认值 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ------ | ------ |
| data                  | 展示数据                                                                                                                | array                         | —      | —      |
| multiple              | 是否允许多选节点                                                                                                        | boolean                       | —      | false  |
| default-checked-keys  | 默认勾选的节点的 key 的数组                                                                                             | array                         | —      | —      |
| default-expanded-keys | 默认展开项                                                                                                              | array                         | —      | —      |
| show-checkbox         | 是否展示勾选框                                                                                                          | boolean                       | —      | false  |
| selectable            | 是否可以被选中                                                                                                          | boolean                       | —      | true   |
| selected-keys         | 默认被勾选的项                                                                                                          | array                         | —      | —      |
| on-load               | 异步加载数据的回调函数，如果没有加载到数据你应该让 Promise resolve false 或者 reject 这个 Promise，否则加载动画不会停止 | (node: TreeOption) => Promise | —      | —      |

### TreeOption Properties

| 名称      | 类型           | 说明                                              |
| --------- | -------------- | ------------------------------------------------- |
| key       | string\|number | 节点的 key，需要唯一，可使用 key-field 修改字段名 |
| label     | string         | 节点的内容，可使用 label-field 修改字段名         |
| children? | TreeOption[]   | 节点的子节点                                      |
| disabled? | boolean        | 是否禁用节点                                      |
| isLeaf?   | boolean        | 节点是否是叶节点，在异步展开状态下是必须的        |
