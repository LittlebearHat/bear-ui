# Modal 弹框

## 使用弹框

- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目里使用。

<b-modal 
  v-model:is-show-modal="isShowModal"
  title="设置标题"
  :show-close-icon="true"
  :mask="true"
  :click-mask-close="true"
>
  <!-- 要与组件的具名插槽对应 -->
  <template #head>
    具名插槽
  </template>
  <template #body>
    <button
      type="success"
      plain
      @click="rightOpen"
    >
      右侧弹出
    </button>
  </template>
  <!-- 要与子组件的插槽对应 -->
  <template #footer>
    <button
      size="small"
      @click="isShowModal = false"
    >
      取消
    </button>
    <button
      type="primary"
      size="small"
      @click="isShowModal = false"
    >
      确认
    </button>
  </template>
</b-modal>
<button
  type="primary"
  @click="isShowModal = true"
>
  打开弹框
</button>


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


## API

### Modal Props

| 名称  | 类型             | 默认值    | 说明     |
| ----- | ---------------- | --------- | -------- |
| color | string           | undefined | 图标颜色 |
| size  | number \| string | undefined | 图片大小 |
