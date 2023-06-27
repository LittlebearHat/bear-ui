# Calendar 日历

显示日期

## 基本使用

::: demo

<template #source>
<b-calendar v-model="currentDate"></b-calendar>
</template>

<script setup>
  import {ref,computed} from 'vue'
  const currentDate = ref(new Date())
</script>

```vue
<template #source>
  <b-calendar v-model="currentDate"></b-calendar>
</template>
<script setup>
import { ref, computed } from 'vue'
const currentDate = ref(new Date())
</script>
```

:::

## 自定义内容

::: demo

<template #source>
<b-calendar v-model="currentDate">
<template #date-cell="{data}">

<p :class="data.isSelected ? 'is-selected':''">
{{ data.day.split('-').slice(1).join('-') }}
{{ data.isSelected ? '^':''}}
</p>
</template>
</b-calendar>
</template>

<script>
import {ref,computed} from 'vue'
const currentDate = ref(new Date())
</script>

```vue
<template #source>
  <b-calendar v-model="currentDate">
    <template #date-cell="{ data }">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }}
        {{ data.isSelected ? '^' : '' }}
      </p>
    </template>
  </b-calendar>
</template>

<script setup>
import { ref, computed } from 'vue'
const currentDate = ref(new Date())
</script>
```

:::

## API

### Calendar 属性

| 名称              | 说明     | 类型   | 可选项 | 默认值 |
| ----------------- | -------- | ------ | ------ | ------ |
| data              | 绑定值   | Date   | —      | —      |
| first_day_of_week | 周起始日 | Number | 0-6    | 0      |

### Calendar 插槽

| 参数 | 说明                                                                                                                                                                        | 类型   | 可选值 | 默认值 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| date | 单元格代表的日期                                                                                                                                                            | Date   | —      | —      |
| data | { type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd | Object | —      | —      |
