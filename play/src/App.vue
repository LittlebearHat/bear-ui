<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// console.log(Icon);
import { ref, computed } from 'vue'
import BIcon from '@bear-ui/components/icon'
import BAvatar from '@bear-ui/components/avatar'
import { AddCircle } from '@vicons/ionicons5'
import { TreeOption, Key } from '@bear-ui/components/tree'
import BPopover from '@bear-ui/components/popover'
import { UploadRawFile } from '@bear-ui/components/upload'
// import BButton from '@bear-ui/components/button'
// console.log(BIcon)
// function createData(level = 4, parentKey = ''): any {
//   if (!level) return []
//   const arr = new Array(6 - level).fill(0)
//   return arr.map((_, idx: number) => {
//     const key = parentKey + level + idx
//     return {
//       label: createLabel(level),
//       key,
//       children: createData(level - 1, key)
//     }
//   })
// }
// function createLabel(level: number): string {
//   if (level === 4) return '40'
//   if (level === 3) return '3'
//   if (level === 2) return '2'
//   if (level === 1) return '1'
//   return ''
// }
const data = [
  {
    label: '123',
    key: '123',
    children: [
      {
        label: '123',
        key: '123'
      }
    ]
  }
]

// const sourceArticles = ref([
//   {
//     article_id: '7037336504418435103',
//     title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
//     collect_count: 151, //收藏
//     comment_count: 46, // 评论数
//     ctime: '1638507790', // 创建时间
//     digg_count: 161, // 点赞数
//     view_count: 8561 // 阅读数
//   },
//   {
//     article_id: '7037336504418435103',
//     title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
//     collect_count: 151, //收藏
//     comment_count: 46, // 评论数
//     ctime: '1638507790', // 创建时间
//     digg_count: 161, // 点赞数
//     view_count: 8561 // 阅读数
//   },
//   {
//     article_id: '7037336504418435103',
//     title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
//     collect_count: 151, //收藏
//     comment_count: 46, // 评论数
//     ctime: '1638507790', // 创建时间
//     digg_count: 161, // 点赞数
//     view_count: 8561 // 阅读数
//   },
//   {
//     article_id: '7037336504418435103',
//     title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
//     collect_count: 151, //收藏
//     comment_count: 46, // 评论数
//     ctime: '1638507790', // 创建时间
//     digg_count: 161, // 点赞数
//     view_count: 8561 // 阅读数
//   },
//   {
//     article_id: '7037336504418435103',
//     title: '历时两个月！Nuxt3从入门到实战！你值得收藏！', // 标题
//     collect_count: 151, //收藏
//     comment_count: 46, // 评论数
//     ctime: '1638507790', // 创建时间
//     digg_count: 161, // 点赞数
//     view_count: 8561 // 阅读数
//   }
// ])
// const pageIndex = ref(1)
// const pageSize = ref(1)
// const articles = computed(() =>
//   sourceArticles.value.slice(
//     (pageIndex.value - 1) * pageSize.value,
//     pageIndex.value * pageSize.value
//   )
// )
// console.log('tree', data)

const handleBeforUpload = (rawFile: UploadRawFile) => {
  return true;
}

const currentDate = ref(new Date())


const username = ref('hello')
const handleBlur = (e: FocusEvent) => {
  console.log('blur');
  
}
const handleFocus = (e: FocusEvent) => {
  console.log("focus");
  
}
</script>

<template>
  <!-- <b-tree :data="data">
  </b-tree> -->
  <!-- <b-checkbox
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
  ></b-pagination> -->
  <!-- <b-popover>
    <template #content>
      <div>Hello World</div>
    </template>
    <button>11</button>
  </b-popover> -->
  <!-- <b-button
    size="small"
    :round="true"
    icon-placement="right"
    loading="true"
  >
    1312
  </b-button> -->

  <!-- <b-upload multiple:before-upload="handleBeforUpload" action="http://localhost:4000/upload" drag>
    <b-button>点我上传</b-button>
  </b-upload> -->

  <!-- <b-calendar v-model="currentDate">
    <template #date-cell="{data}">
      <p :class="data.isSelected ? 'is-selected':''">
      {{ data.day.split('-').slice(1).join('-') }}
      {{ data.isSelected ? '^':''}}
      </p>
    </template>
  </b-calendar> -->
  {{ username }}
  <b-input v-model="username"
    @blur="handleBlur"
    @focus="handleFocus" 
    placeholder="请输入密码"
    :showPassword="true"
    :clearable="true">
    <template #prepend>yuyu</template>
    <template #prefixIcon>
      <b-icon>
        <AddCircle></AddCircle>
      </b-icon>
    </template>
    <!-- <template #sufixIcon>
      <b-icon>
        <AddCircle></AddCircle>
      </b-icon>
    </template> -->
    <template #append>yuyu</template>
  </b-input>
</template>

<style scoped></style>
