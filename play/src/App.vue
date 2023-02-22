<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// console.log(Icon);
import { ref, computed } from 'vue'
import BIcon from '@bear-ui/components/icon'
import BAvatar from '@bear-ui/components/avatar'
import { AddCircle } from '@vicons/ionicons5'
import { TreeOption, Key } from '@bear-ui/components/tree'
import BPopover from '@bear-ui/components/popover'
// console.log(BIcon)
function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}
function createLabel(level: number): string {
  if (level === 4) return '40'
  if (level === 3) return '3'
  if (level === 2) return '2'
  if (level === 1) return '1'
  return ''
}
const data = ref(createData())

const sourceArticles = ref([
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, //收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, //收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, //收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, //收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  },
  {
    article_id: '7037336504418435103',
    title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
    collect_count: 151, //收藏
    comment_count: 46, // 评论数
    ctime: '1638507790', // 创建时间
    digg_count: 161, // 点赞数
    view_count: 8561 // 阅读数
  }
])
const pageIndex = ref(1)
const pageSize = ref(1)
const articles = computed(() =>
  sourceArticles.value.slice(
    (pageIndex.value - 1) * pageSize.value,
    pageIndex.value * pageSize.value
  )
)
console.log('tree', data)
</script>

<template>
  <b-tree
    v-model:selected-keys="value"
    :data="data"
    selectable
    show-checkbox
    :default-checked-keys="['40']"
    multiple="true"
  ></b-tree>
  <b-checkbox
    :disabled="false"
    :indeterminate="true"
    label="节点"
  ></b-checkbox>
  <div class="essays-container">
    <a v-for="article of articles">
      <div class="essay-list">
        <div class="first-line">
          <span class="title">{{ article.title }}</span>
        </div>
        <div class="infos">
          <span> {{ article.ctime }} </span>
          <span class="split-line"></span>
          <span>{{ article.view_count }}阅读</span>
          <span class="dot">·</span>
          <span>{{ article.digg_count }}点赞</span>
          <span class="dot">·</span>
          <span>{{ article.comment_count }}评论</span>
          <span class="dot">·</span>
          <span>{{ article.collect_count }}收藏</span>
        </div>
      </div>
    </a>
  </div>
  <b-pagination
    v-model="pageIndex"
    :total="sourceArticles.length"
    :page-size="pageSize"
  ></b-pagination>
  <!-- <b-popover>
    <template #content>
      <div>Hello World</div>
    </template>
    <button>11</button>
  </b-popover> -->
</template>

<style scoped></style>
