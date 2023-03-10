# Drawer 抽屉

## 使用抽屉

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<b-drawer
  v-model:is-show-drawer="isShowDrawer1"
  title="上方弹出 direction='top'"
  direction="top"
  :before-close="handleClose"
  :show-close-icon="false"
  :is-show-header="true"
  :mask="true"
  :click-mask-close="true"
></b-drawer>
<b-drawer
  v-model:is-show-drawer="isShowDrawer2"
  title="下方弹出"
  direction="bottom"
  :is-show-header="true"
  :show-close-icon="true"
>
  <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
</b-drawer>
<b-drawer
  v-model:is-show-drawer="isShowDrawer3"
  title="左方弹出"
  direction="left"
  :is-show-header="true"
  :show-close-icon="true"
>
  <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
</b-drawer>
<b-drawer
  v-model:is-show-drawer="isShowDrawer4"
  title="右方弹出"
  direction="right"
  :is-show-header="true"
  :show-close-icon="true"
>
  <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
</b-drawer>
<button
  type="success"
  plain
  @click="topOpen"
>
  上方弹出
</button>
<button
  type="success"
  plain
  @click="bottomOpen"
>
  下方弹出
</button>
<button
  type="success"
  plain
  @click="leftOpen"
>
  左侧弹出
</button>
<button
  type="success"
  plain
  @click="rightOpen"
>
  右侧弹出
</button>

<script>
import BDrawer from '@bear-ui/components/drawer'
export default {
  components: {
    BDrawer,
  },
  data() {
    return {
      isShowDrawer1: false,
      isShowDrawer2: false,
      isShowDrawer3: false,
      isShowDrawer4: false,
    };
  },
  methods: {
    topOpen() {
      this.isShowDrawer1 = true;
    },
    bottomOpen() {
      this.isShowDrawer2 = true;
    },
    leftOpen() {
      this.isShowDrawer3 = true;
    },
    rightOpen() {
      this.isShowDrawer4 = true;
    },
    handleClose(close) {
      const msg = confirm("确认关闭close()函数关闭")//当用户点击确认按钮时，返回true;
      if (msg === true){
        console.log("close")
        close();
      }
      else{
        console.log("error")
      }
    },
  },
};
</script>


<details>
<summary>复制代码</summary>

```vue
<template>
  <b-drawer
    v-model:is-show-drawer="isShowDrawer1"
    title="上方弹出direction='top'"
    direction="top"
    :before-close="handleClose"
    :show-close-icon="false"
    :is-show-header="true"
    :mask="true"
    :click-mask-close="true"
  ></b-drawer>
  <b-drawer
    v-model:is-show-drawer="isShowDrawer2"
    title="下方弹出"
    direction="bottom"
    :is-show-header="true"
    :show-close-icon="true"
  >
    <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
  </b-drawer>
  <b-drawer
    v-model:is-show-drawer="isShowDrawer3"
    title="左方弹出"
    direction="left"
    :is-show-header="true"
    :show-close-icon="true"
  >
    <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
  </b-drawer>
  <b-drawer
    v-model:is-show-drawer="isShowDrawer4"
    title="右方弹出"
    direction="right"
    :is-show-header="true"
    :show-close-icon="true"
  >
    <h1>:isShowHeader="false"去掉抽屉的头部内容</h1>
  </b-drawer>
  <button
    type="success"
    plain
    @click="topOpen"
  >
    上方弹出
  </button>
  <button
    type="success"
    plain
    @click="bottomOpen"
  >
    下方弹出
  </button>
  <button
    type="success"
    plain
    @click="leftOpen"
  >
    左侧弹出
  </button>
  <button
    type="success"
    plain
    @click="rightOpen"
  >
    右侧弹出
  </button>
</template>
```
</details>

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| isShowDrawer   | Boolean   | false | 是否显示抽屉 |
| isShowHeader   | Boolean   | false | 是否显示抽屉头部内容 |
| title          | String    | undefined | 父组件传过来的抽屉标题值 |
| showCloseIcon  | Boolean   | false | 是否显示关闭小图标 |
| mask           | Boolean   | false | 是否开启抽屉背景遮罩层 |
| clickMaskClose | Boolean   | false | 点击遮罩层关闭 |
| direction      | String    | undefined | 抽屉的4个方向 |
| beforeClose    | Function  | undefined | 接收父组件传递过来的关闭函数，会中断关闭抽屉的操作 |
