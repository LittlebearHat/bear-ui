<script setup lang="ts">
// console.log(Icon);
import BIcon from '@bear-ui/components/icon'
import { AddCircle } from '@vicons/ionicons5'
console.log(BIcon)
</script>

<template>
  <b-icon :color="'red'">
    <AddCircle></AddCircle>
  </b-icon>
  <b-icon>
    <AddCircle></AddCircle>
  </b-icon>
  <div>测试环境</div>
</template>

<style scoped></style>
