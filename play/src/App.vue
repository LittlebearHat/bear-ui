<!-- <script setup lang="ts">
import BDrawer from '@bear-ui/components/drawer'


</script> -->

<script>
import BDrawer from '@bear-ui/components/drawer'
import BModal from '@bear-ui/components/modal'
export default {
  components: {
    BDrawer,
    BModal
  },
  data() {
    return {
      isShowDrawer1: false,
      isShowDrawer2: false,
      isShowDrawer3: false,
      isShowDrawer4: false,
      isShowModal: false,
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


<template>
  <!-- <b-icon :color="'red'">
    <AddCircle></AddCircle>
  </b-icon>
  <b-icon>
    <AddCircle></AddCircle>
  </b-icon> -->
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
  <div>测试环境</div>
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

<style></style>
