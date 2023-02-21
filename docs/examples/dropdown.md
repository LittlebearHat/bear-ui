# Dropdown 下拉菜单

将菜单折叠到下拉菜单中。

## 使用

悬停在下拉菜单上以展开更多

::: demo

<template #source>
<b-dropdown>
<span >
Dropdown List
</span>
<template #dropdown>
<b-dropdown-menu>
<b-dropdown-item>Action 1</b-dropdown-item>
<b-dropdown-item>Action 2</b-dropdown-item>
<b-dropdown-item>Action 3</b-dropdown-item>
<b-dropdown-item disabled>Action 4</b-dropdown-item>
<b-dropdown-item divided>Action 5</b-dropdown-item>
</b-dropdown-menu>
</template>
</b-dropdown>
<br />
</template>

```html
<b-dropdown>
  <span> Dropdown List </span>
  <template #dropdown>
    <b-dropdown-menu>
      <b-dropdown-item>Action 1</b-dropdown-item>
      <b-dropdown-item>Action 2</b-dropdown-item>
      <b-dropdown-item>Action 3</b-dropdown-item>
      <b-dropdown-item disabled>Action 4</b-dropdown-item>
      <b-dropdown-item divided>Action 5</b-dropdown-item>
    </b-dropdown-menu>
  </template>
</b-dropdown>
```

:::

## 触发方式

可以配置点击激活或者悬停激活。

将 trigger 属性设置为 click 即可， 默认为 hover。

::: demo

<template #source>

<div style='display:flex'>
<div>
<div>click to trigger</div>
<b-dropdown  trigger="click">
<span >
Dropdown List
</span>
<template #dropdown>
<b-dropdown-menu>
<b-dropdown-item>Action 1</b-dropdown-item>
<b-dropdown-item>Action 2</b-dropdown-item>
<b-dropdown-item>Action 3</b-dropdown-item>
<b-dropdown-item disabled>Action 4</b-dropdown-item>
<b-dropdown-item divided>Action 5</b-dropdown-item>
</b-dropdown-menu>
</template>
</b-dropdown>
</div>
<br />
<div style='margin: 0 50px'>
<div>hover to trigger</div>
<b-dropdown >
<span >
Dropdown List
</span>
<template #dropdown>
<b-dropdown-menu>
<b-dropdown-item>Action 1</b-dropdown-item>
<b-dropdown-item>Action 2</b-dropdown-item>
<b-dropdown-item>Action 3</b-dropdown-item>
<b-dropdown-item disabled>Action 4</b-dropdown-item>
<b-dropdown-item divided>Action 5</b-dropdown-item>
</b-dropdown-menu>
</template>
</b-dropdown>
</div>
</div>
</template>

```html
<b-dropdown trigger="click">
  <span> Dropdown List </span>
  <template #dropdown>
    <b-dropdown-menu>
      <b-dropdown-item>Action 1</b-dropdown-item>
      <b-dropdown-item>Action 2</b-dropdown-item>
      <b-dropdown-item>Action 3</b-dropdown-item>
      <b-dropdown-item disabled>Action 4</b-dropdown-item>
      <b-dropdown-item divided>Action 5</b-dropdown-item>
    </b-dropdown-menu>
  </template>
</b-dropdown>
```

:::

## API

### Dropdown 属性

| 名称         | 说明               | 类型    | 可选值                  | 默认值 |
| ------------ | ------------------ | ------- | ----------------------- | ------ |
| disabled     | 是否禁用           | boolean | —                       | false  |
| trigger      | 触发下拉的行为     | string  | hover/click/contextmenu | hover  |
| show-timeout | 展开下拉菜单的延时 | number  | —                       | 250    |

### Dropdown 插槽

| 插槽名 | 说明           | 子标签        |
| ------ | -------------- | ------------- |
| —      | 下拉菜单的内容 | Dropdown-Item |

### Dropdown-Item 属性

| 名称     | 说明                      | 类型      | 可选值 | 默认值 |
| -------- | ------------------------- | --------- | ------ | ------ |
| disabled | 是否禁用                  | boolean   | —      | false  |
| icon     | 自定义图标 触发下拉的行为 | Component | string | —      |

### Dropdown-Item 插槽

| 插槽名 | 说明                      |
| ------ | ------------------------- |
| —      | 自定义 Dropdown-Item 内容 |
