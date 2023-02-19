<template>
  <div
    v-show="visible"
    :class="bem.b()"
  >
    <div :class="bem.e('body')">
      <div
        :class="bem.e('box')"
        :style="`width:${width}`"
      >
        <div>
          <slot name="headerSlot" />
          <div :class="bem.e('header')">
            <h2 :class="bem.e('title')">
              {{ title }}
            </h2>
            <span
              :class="bem.e('close')"
              @click="onClickCancelButton"
            >close</span>
          </div>
        </div>

        <div :class="bem.e('box')">
          <slot />
        </div>

        <div>
          <slot name="footerSlot" />
          <div :class="bem.e('footer')">
            <button
              mode="text"
              @click="onClickCancelButton"
            >
              取消
            </button>
            <button @click="onClickConfirmButton">
              确定
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { modalProps } from './modal'
import { createNamespace } from '@bear-ui/hooks/use-namespace'

const emit = defineEmits(['cancel','confirm'])
const props = defineProps(modalProps)
defineOptions({
  name: 'b-drawer'
})
const bem = createNamespace('modal')
function onClickCancelButton(e: Event) {
  emit('cancel', e);
}
function onClickConfirmButton(e: Event) {
  emit('confirm', e);
}
</script>

<style></style>