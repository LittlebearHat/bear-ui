<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <div v-if="slots.prepend" :class="bem.be('group','prepend')">
      <slot name="prepend"></slot>
    </div>

    <div :class="[bem.e('wrapper')]">
      <span v-if="slots.prefixIcon" :class="bem.e('prefix')">
        <slot name="prefixIcon"></slot>
      </span>

      <input :type="showPassword?(passwordVisibel?'text':'password'):type" 
      v-bind="attrs" 
      :class="bem.e('inner')" 
      ref="input" 
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus">

      <b-icon v-if="showPwdVisible" 
        @click="handlePasswordVisible" 
        style="line-height: 16px;font-weight: bold;">
        e
      </b-icon>
      <b-icon v-if="shwoClear" 
        @click="clear" 
        style="line-height: 16px;font-weight: bold;">
        x
      </b-icon>

      <span v-if="slots.sufixIcon" :class="bem.e('suffix')">
        <slot name="sufixIcon"></slot>
      </span>
      
    </div>

    <div v-if="slots.append" :class="bem.be('group','append')">
      <slot name="append"></slot>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from '@bear-ui/hooks';
import { useSlots, watch ,ref, computed, nextTick,inject} from 'vue';
import { inputProps ,inputEmits} from './input';
import { useAttrs } from 'vue';
import { onMounted } from 'vue';
import { formItemContextKey } from '../../form/src/form-item';


const formItemContext = inject('form-item')

defineOptions({
  name: 'b-input',
  inheritAttrs:false
})

const bem = createNamespace('input')
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const slots = useSlots()
const attrs = useAttrs()

//监控value的值的变化，重新赋值
watch(() => props.modelValue, () => {
  (formItemContext as any)?.validate('change').catch(()=>{})
  setNativeInputValue();
})

const input = ref<HTMLInputElement | null>(null)

const setNativeInputValue = () => {
  const inputEle = input.value;
  if (!inputEle) {
    return 
  }
  inputEle.value= String(props.modelValue)
}


const focus = async () => {
  await nextTick()  //这里重新获取焦点
  input.value?.focus()
}

const passwordVisibel = ref(false);
const handlePasswordVisible = () => {
  passwordVisibel.value = !passwordVisibel.value
  focus()
}

const showPwdVisible = computed(() => {
  return props.modelValue && props.showPassword &&!props.disabled&&!props.readonly
})

const shwoClear = computed(() => {
  return props.modelValue && props.clearable &&!props.disabled&&!props.readonly
})

const clear = () => {
  emit('input', '')
  emit('update:modelValue', '')
  emit('clear')
  focus()
}
onMounted(() => {
  //组件加载完毕，设置一次输入框的值
  setNativeInputValue()
})

const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  emit('input', value);
  emit('update:modelValue',value)//触发事件可以实现双向绑定
}

const handleChange = (e: Event) => {
  emit('change',(e.target as HTMLInputElement).value)
}

const handleBlur = (e: FocusEvent) => {
 ( formItemContext as any)?.validate('blur').catch(()=>{})
  emit('blur',e)
}
const handleFocus = (e: FocusEvent) => {
  emit('focus',e)
}
</script>