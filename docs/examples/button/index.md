<script setup lang="ts">
import { GameController } from '@vicons/ionicons5'
</script>
<style>
  .row{
    margin:5px;
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
</style>

# Button 按钮

是个组件库总得有这玩意吧

## 基础用法

使用 `type`、`round` 来定义按钮的样式

:::demo

<template #source>

<div class="row">
<b-button>Default</b-button>
<b-button type="primary">Primary</b-button>
<b-button type="success">Success</b-button>
<b-button type="info">Info</b-button>
<b-button type="warning">Warning</b-button>
<b-button type="danger">Danger</b-button>
</div>
<div class="row">
<b-button round>Default</b-button>
<b-button type="primary" round>Primary</b-button>
<b-button type="success" round>Success</b-button>
<b-button type="info" round>Info</b-button>
<b-button type="warning" round>Warning</b-button>
<b-button type="danger" round>Danger</b-button>
</div>
</template>

```vue
<template>
  <div class="row">
    <b-button>Default</b-button>
    <b-button type="primary">Primary</b-button>
    <b-button type="success">Success</b-button>
    <b-button type="info">Info</b-button>
    <b-button type="warning">Warning</b-button>
    <b-button type="danger">Danger</b-button>
  </div>
  <div class="row">
    <b-button round>Default</b-button>
    <b-button type="primary" round>Primary</b-button>
    <b-button type="success" round>Success</b-button>
    <b-button type="info" round>Info</b-button>
    <b-button type="warning" round>Warning</b-button>
    <b-button type="danger" round>Danger</b-button>
  </div>
</template>
```

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
:::demo

<template #source>

<div class="row">
<b-button disabled>Default</b-button>
<b-button type="primary" disabled>Primary</b-button>
<b-button type="success" disabled>Success</b-button>
<b-button type="info" disabled>Info</b-button>
<b-button type="warning" disabled>Warning</b-button>
<b-button type="danger" disabled>Danger</b-button>
</div>
<div class="row">
<b-button round disabled>Default</b-button>
<b-button type="primary" round disabled>Primary</b-button>
<b-button type="success" round disabled>Success</b-button>
<b-button type="info" round disabled>Info</b-button>
<b-button type="warning" round disabled>Warning</b-button>
<b-button type="danger" round disabled>Danger</b-button>
</div>
</template>

```vue
<template>
  <div class="row">
    <b-button disabled>Default</b-button>
    <b-button type="primary" disabled>Primary</b-button>
    <b-button type="success" disabled>Success</b-button>
    <b-button type="info" disabled>Info</b-button>
    <b-button type="warning" disabled>Warning</b-button>
    <b-button type="danger" disabled>Danger</b-button>
  </div>
  <div class="row">
    <b-button round disabled>Default</b-button>
    <b-button type="primary" round disabled>Primary</b-button>
    <b-button type="success" round disabled>Success</b-button>
    <b-button type="info" round disabled>Info</b-button>
    <b-button type="warning" round disabled>Warning</b-button>
    <b-button type="danger" round disabled>Danger</b-button>
  </div>
</template>
```

:::

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

因为设计问题，使用图标需要声明`icon-placement`，根据声明值，图标可在文字左或右边
:::demo
<template #source>

<div class="row">
    <b-button icon-placement="left">
    <template #icon>
    <b-icon><game-controller/></b-icon>
    </template>
    </b-button>
    <b-button icon-placement="left">
    <template #icon>
    <b-icon><game-controller/></b-icon>
    </template>
    图标在左
    </b-button>
    <b-button icon-placement="right">
    <template #icon>
    <b-icon><game-controller/></b-icon>
    </template>
    图标在右
    </b-button>
  </div>
</template>

```vue
<template>
  <div class="row">
    <b-button icon-placement="left">
      <template #icon>
        <b-icon><game-controller /></b-icon>
      </template>
    </b-button>
    <b-button icon-placement="left">
      <template #icon>
        <b-icon><game-controller /></b-icon>
      </template>
      图标在左
    </b-button>
    <b-button icon-placement="right">
      <template #icon>
        <b-icon><game-controller /></b-icon>
      </template>
      图标在右
    </b-button>
  </div>
</template>
```

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

:::demo
<template #source>

<div class="row">
<b-button loading icon-placement="left">Loading</b-button>
<b-button loading icon-placement="left"></b-button>
<b-button loading icon-placement="right">Loading</b-button>
</div>
</template>

```vue
<template>
  <div class="row">
    <b-button loading icon-placement="left">Loading</b-button>
    <b-button loading icon-placement="left"></b-button>
    <b-button loading icon-placement="right">Loading</b-button>
  </div>
</template>
```

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large`和`small`两种值。
:::demo
<template #source>

<div class="row">
<b-button>Medium</b-button>
<b-button size="large">Large</b-button>
<b-button size="small">Small</b-button>
</div>
</template>

```vue
<template>
  <div class="row">
    <b-button>Medium</b-button>
    <b-button size="large">Large</b-button>
    <b-button size="small">Small</b-button>
  </div>
</template>
```

:::

| 属性名      | 说明             | 类型      | 默认值  |
| ----------- | ---------------- | --------- | ------- |
| size        | 尺寸             | string    | medium  |
| type        | 类型             | string    | default |
| native-type | 原生 type 属性   | string    | button  |
| round       | 是否为圆角       | boolean   | false   |
| loading     | 是否为加载中状态 | boolean   | false   |
| disabled    | 是否禁用         | boolean   | false   |
| icon        | 图标             | component | —       |
