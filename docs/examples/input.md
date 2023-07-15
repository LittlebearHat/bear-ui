# Input 输入

通过鼠标或键盘输入字符

## 基础用法

:::demo
<template #source>
<b-input v-model="username" placeholder="请输入内容"></b-input>
</template>

<script setup>
  import {ref,computed} from 'vue'
  const username = ref('')
</script>

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

## 前后置用法

:::demo
<template #source>
<b-input v-model="username"
@blur="handleBlur"
@focus="handleFocus"
placeholder="请输入密码"
:showPassword="true"
:clearable="true">
<template #prepend>Http://</template>
</b-input>

<b-input v-model="username"
@blur="handleBlur"
@focus="handleFocus"
placeholder="请输入密码"
:showPassword="true"
:clearable="true">

<template #append>.com</template>
</b-input>

</template>

<script>
  import {ref,computed} from 'vue'
  const username = ref('')
</script>

```vue
<template #source>
<b-input v-model="username"
@blur="handleBlur"
@focus="handleFocus"
placeholder="请输入密码"
:showPassword="true"
:clearable="true">
<template #prepend>Http://</template>
</b-input>

<b-input v-model="username"
@blur="handleBlur"
@focus="handleFocus"
placeholder="请输入密码"
:showPassword="true"
:clearable="true">
<template #append>.com</template>
</b-input>

</template>

<script setup>
  import {ref,computed} from 'vue'
  const username = ref('')
</script>
</script>
```

:::

## API

### Input 属性

| 参数          | 说明                 | 类型          | 可选项                                    | 默认值 |
| ------------- | -------------------- | ------------- | ----------------------------------------- | ------ |
| type          | 类型                 | string        | text,password 和其他原生 input 的 type 值 | text   |
| v-model       | 绑定值               | string/number | —                                         | —      |
| placeholder   | 输入框占位文本       | string        | —                                         | —      |
| clearable     | 是否可清空           | boolean       | —                                         | false  |
| show-password | 是否显示切换密码图标 | boolean       | —                                         | false  |
| disabled      | 禁用                 | boolean       | —                                         | false  |
| readonly      | 原生属性，是否可读   | boolean       | —                                         | false  |

### Input 插槽

| 参数    | 说明             |
| ------- | ---------------- |
| prefix  | 输入框头部分内容 |
| suffix  | 输入框尾部分     |
| prepend | 输入前置内容     |
| append  | 输入后置内容     |

### Input 事件

| 事件名称 | 说明                                        |
| -------- | ------------------------------------------- |
| blur     | 在 input 失去焦点时触发                     |
| focus    | 在 input 获取焦点时触发                     |
| change   | 仅在输入框失去焦点或用户按下回车时触发      |
| input    | 在 input 值改变时时触发                     |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 |
