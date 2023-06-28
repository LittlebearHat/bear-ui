<script setup>
  import form from './form.vue'
</script>

# Form 表单

可用于收集，校验数据

## 表单验证

防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误

:::demo
<template #source>

<form></form>
</template>

```vue
<template #source>
  <b-input v-model="username" placeholder="请输入内容"></b-input>
</template>
<script setup>
import { ref, computed } from 'vue'
const username = ref('')
</script>
```

:::

## API

### Form Attributes

| 参数         | 说明                 | 类型    | 可选项 | 默认值 |
| ------------ | -------------------- | ------- | ------ | ------ |
| model        | 表单数据对象         | object  | —      | —      |
| rules        | 表单验证规则         | object  | —      | —      |
| show-message | 是否显示校验错误信息 | boolean | —      | true   |

### Form Methods

| 参数     | 说明                                                                                                                                                                 | 参数                                          |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object)) |

### Form-Item Attributes

| 参数         | 说明                                          | 类型    | 可选值                          | 默认值 |
| ------------ | --------------------------------------------- | ------- | ------------------------------- | ------ |
| prop         | 表单域 model 字段，在使用 validate 方法下必填 | string  | 传入 Form 组件的 model 中的字段 | ——     |
| label        | 标签文本                                      | string  | ——                              | ——     |
| rules        | 表单验证规则发                                | object  | ——                              | ——     |
| show-message | 是否显示校验错误信息发                        | boolean | ——                              | ——     |
