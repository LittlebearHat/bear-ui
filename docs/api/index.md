# Vitepress Demo

## 已实现

- [x] vue 组件

```js
<demo-block>
  <b-button>默认按钮</b-button>
  <b-button type="primary">主要按钮</b-button>
  <b-button type="success">成功按钮</b-button>
  <b-button type="info">信息按钮</b-button>
  <b-button type="warning">警告按钮</b-button>
  <b-button type="danger">危险按钮</b-button>
</demo-block>
```

- [x] vue 代码自动渲染并且显示对应 code（目前已支持 script 和 style，有好的解决方案的伙伴请提 issue）

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

```vue
<b-button>默认按钮</b-button>
<b-button type="primary">主要按钮</b-button>
<b-button type="success">成功按钮</b-button>
<b-button type="info">信息按钮</b-button>
<b-button type="warning">警告按钮</b-button>
<b-button type="danger">危险按钮</b-button>
```

:::
