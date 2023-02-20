# Menu 菜单

## 使用

::: demo

<template #source>
<b-menu>
<b-menu-item index="1">Processing Center</b-menu-item>
<b-sub-menu index="2">
<template #title>Workspace</template>
<b-menu-item index="2-1">item one</b-menu-item>
<b-menu-item index="2-2">item two</b-menu-item>
<b-menu-item index="2-3">item three</b-menu-item>
</b-sub-menu>
<b-menu-item index="3" disabled>Info</b-menu-item>
<b-menu-item index="4">Orders</b-menu-item>
</b-menu>
<br />
</template>

```html
<b-menu>
  <b-menu-item index="1">Processing Center</b-menu-item>
  <b-sub-menu index="2">
    <template #title>Workspace</template>
    <b-menu-item index="2-1">item one</b-menu-item>
    <b-menu-item index="2-2">item two</b-menu-item>
    <b-menu-item index="2-3">item three</b-menu-item>
  </b-sub-menu>
  <b-menu-item index="3" disabled>Info</b-menu-item>
  <b-menu-item index="4">Orders</b-menu-item>
</b-menu>
```

:::

## API

### SubMenu 属性

| 名称     | 说明     | 类型    | 可选项 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| index    | 唯一标志 | string  | —      | —      |
| disabled | 是否禁用 | boolean | —      | false  |

### SubMenu 插槽

| 插槽名 | 说明           | 子标签              |
| ------ | -------------- | ------------------- |
| —      | 自定义默认内容 | SubMenu / Menu-Item |
| title  | 自定义标题内容 | —                   |

### Menu-Item 属性

| 名称     | 说明     | 类型    | 可选项 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| index    | 唯一标志 | string  | —      | —      |
| disabled | 是否禁用 | boolean | —      | false  |

### Menu-Item 插槽

| 插槽名 | 说明           | 子标签              |
| ------ | -------------- | ------------------- |
| —      | 自定义默认内容 | SubMenu / Menu-Item |
| title  | 自定义标题内容 | —                   |
