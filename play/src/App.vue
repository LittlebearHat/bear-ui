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

<style scoped></style>
