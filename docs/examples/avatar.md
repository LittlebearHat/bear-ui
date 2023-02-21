# Avatar 头像

用于用户的头像展示

## 使用

::: demo

<template #source>
<b-avatar src="https://avatars.githubusercontent.com/u/84793349?v=4" size="large" alt="large"/>
<b-avatar src="https://avatars.githubusercontent.com/u/84793349?v=4" alt="deflaut"/>
<b-avatar src="https://avatars.githubusercontent.com/u/84793349?v=4" size="small" alt="small"/>
<br />
<b-avatar src="https://avatars.githubusercontent.com/u/84793349?v=4" size="large" shape="square" alt="large"/>
<BAvatar src="https://avatars.githubusercontent.com/u/84793349?v=4" shape="square" alt="deflaut"/>
<BAvatar src="https://avatars.githubusercontent.com/u/84793349?v=4" size="small" shape="square" alt="small"/>
<b-avatar :src="url" size="large" alt="large" />
<br />
</template>

```html
<b-avatar :src="url" size="large" alt="large" />
<b-avatar :src="url" alt="deflaut" />
<b-avatar :src="url" size="small" alt="small" />
<b-avatar :src="url" size="large" shape="square" alt="large" />
<BAavatar :src="url" shape="square" alt="deflaut" />
<BAavatar :src="url" size="small" shape="square" alt="small" />

<script lang="ts" setup>
  const url = 'https://avatars.githubusercontent.com/u/84793349?v=4'
</script>
```

:::

## API

### Attributes

| 名称    | 说明                                       | 类型                              | 默认值  |
| ------- | ------------------------------------------ | --------------------------------- | ------- |
| icon    | 设置 Avatar 的图标类型，具体参考 Icon 组件   | `string   \ Component`            | —       |
| size    | Avatar 大小                                | `'large'  \ 'default'  \ 'small'` | default |
| shape   | Avatar 形状                                | `'circle' \ 'square'`             | circle  |
| src     | Avatar 图片的源地址                        | `string`                          | —       |
| src-set | 图片 Avatar 的原生 `srcset` 属性           | `string`                          | —       |
| alt     | 图片 Avatar 的原生 `alt` 属性              | `string`                          | —       |

### Events

| 名称  | 说明               | 类型                            |
| ----- | ------------------ | ------------------------------- |
| error | 图片加载失败时触发 | `Function` `(e: Event) => void` |

### Slots

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |
