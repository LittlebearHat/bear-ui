# Pagination 分页

你总不能一口气展示完所有数据吧

## 使用

::: demo

<template #source>

<div>
  <div>
    <a v-for="article of articles">
      <div>
        <div>
          <span>{{ article.title }}</span>
        </div>
        <div>
          <span>{{ article.content }}</span>
        </div>
      </div>
    </a>
  </div>
  <b-pagination
    v-model="pageIndex"
    :total="sourceArticles.length"
    :page-size="pageSize"
  ></b-pagination>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
const pageIndex = ref(1)
const pageSize = ref(1)
const articles = computed(() =>
  sourceArticles.value.slice(
    (pageIndex.value - 1) * pageSize.value,
    pageIndex.value * pageSize.value
  )
)
const sourceArticles = ref([
{
title: '我是标题1',
content:'我是内容1'
},
{
title: '我是标题2',
content:'我是内容2'
},
{
title: '我是标题3',
content:'我是内容3'
},{
title: '我是标题4',
content:'我是内容4'
}
])
</script>

```vue
<template #source>
  <div>
    <div>
      <a v-for="article of articles">
        <div>
          <div>
            <span>{{ article.title }}</span>
          </div>
          <div>
            <span>{{ article.content }}</span>
          </div>
        </div>
      </a>
    </div>
    <b-pagination
      v-model="pageIndex"
      :total="sourceArticles.length"
      :page-size="pageSize"
    ></b-pagination>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const pageIndex = ref(1)
const pageSize = ref(1)
const articles = computed(() =>
  sourceArticles.value.slice(
    (pageIndex.value - 1) * pageSize.value,
    pageIndex.value * pageSize.value
  )
)
const sourceArticles = ref([
  {
    title: '我是标题1',
    content: '我是内容1'
  },
  {
    title: '我是标题2',
    content: '我是内容2'
  },
  {
    title: '我是标题3',
    content: '我是内容3'
  },
  {
    title: '我是标题4',
    content: '我是内容4'
  }
])
</script>
```

:::

## API

### Pagination Props

| 属性值      | 说明                                                          | 类型   | 默认值 |
| ----------- | ------------------------------------------------------------- | ------ | ------ |
| total       | 总条目数                                                      | number | —      |
| page-size   | 每页显示条目个数                                              | number | 10     |
| pager-count | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 | number | 7      |
