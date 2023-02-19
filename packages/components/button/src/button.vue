<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled)
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMousedown"
  >
    <template v-if="iconPlacement === 'left'">
      <b-icon>
        <LoadingComponent v-if="loading"></LoadingComponent>
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </b-icon>
    </template>
    <slot>
    </slot>
    <template v-if="iconPlacement === 'right'">
      <b-icon>
        <LoadingComponent v-if="loading"></LoadingComponent>
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </b-icon>
    </template>
  </button>
</template>

<script lang="ts" setup>
import LoadingComponent from '@bear-ui/components/internal-icon/Loading';
import { createNamespace } from '@bear-ui/hooks/use-namespace';
import { buttonEmits, buttonProps } from './button';
import BIcon from '@bear-ui/components/icon'
import { useSlots } from 'vue';

const bem = createNamespace('button'); // b-button
defineOptions({
  name: 'b-button',
  inheritAttrs: false
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps(buttonProps);
const emit = defineEmits(buttonEmits);
const slots = useSlots()

const emitClick = (e: MouseEvent) => {
  emit('click', e)
}
const emitMousedown = (e: MouseEvent) => {
  emit('mousedown', e)
}

</script>