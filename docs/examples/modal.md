# Modal 弹框

## 使用弹框

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<b-drawer
  v-model:is-show-drawer="isShowDrawer4"
  title="右方弹出"
  direction="right"
  :is-show-header="true"
  :show-close-icon="true"
>
  <h1></h1>
</b-drawer>
<button
  type="submit"
  @click="onClickVisible"
>
  Modal
</button>
<b-modal
  title="bearUI：modal"
  width="700px"
  :visible="isShowModal"
  @cancel="onClickCancel"
  @confirm="onClickConfirm"
>
  <template #default>
    <div><button>contain</button></div>
  </template>
</b-modal>

<script>
import BModal from '@bear-ui/components/modal'
export default {
  components: {
    BModal
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onClickVisible () {
      this.isShowModal = !this.isShowModal
    },
    onClickCancel () {
      this.isShowModal = !this.isShowModal
    },
    onClickConfirm () {
      this.isShowModal = !this.isShowModal
    }
  },
};
</script>

<details>
<summary>复制代码</summary>

```vue
<template>
  <button
    type="submit"
    @click="onClickVisible"
  >
    Modal
  </button>
  <b-modal
    title="bearUI：modal"
    :visible="visibleRef"
    width="700px"
    @cancel="onClickCancel"
    @confirm="onClickConfirm"
  >
    <template #default>
      <div><button>contain</button></div>
    </template>
  </b-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BModal from '@bear-ui/components/modal'
const visibleRef = ref(false)
function onClickVisible () {
  visibleRef.value = !visibleRef.value
}
function onClickCancel () {
  visibleRef.value = !visibleRef.value
}
function onClickConfirm () {
  visibleRef.value = !visibleRef.value
}
</script>
```

</details>

## API

### Icon Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| title | string           | undefined | 弹框标题 |
| visible  | Boolean | undefined | 是否显示弹框 |
| width    |  string | undefined |弹框宽度 |
