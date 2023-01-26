# Icon 图标

b-ui 推荐使用 xicons 作为图标库。

```bash
$ pnpm install @vicons/ionicons5
```

## 使用图标

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

```vue
<template>
  <b-icon color="red" size="20">
    <CashOutline />
  </b-icon>
  <b-icon color="green" size="20">
    <CashOutline />
  </b-icon>
  <b-icon color="blue" size="20">
    <CashOutline />
  </b-icon>
</template>

<script setup>
import BIcon from '@bear-ui/components/icon'
import '@bear-ui/theme-chalk/src/index.scss'
import { AddCircle, CashOutline } from '@vicons/ionicons5'
</script>
```

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
