<template>
  <button
    type="submit"
    @click="onClickVisible"
  >
    Modal
  </button>
  <b-modal
    :visible="visibleRef"
    title="bearUI：modal"
    width="500px"
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

<!-- <script>
import BModal from '@bear-ui/components/modal'
export default{
  components: {
    BModal
  },
  data() {
    return {
      visibleRef: false,
    };
  },
  methods:{
    onClickVisible () {
      this.visibleRef = !this.visibleRef
    },
    onClickCancel () {
      this.visibleRef = !this.visibleRef
    },
    onClickConfirm () {
      this.visibleRef = !this.visibleRef
    }
  }
};
</script> -->