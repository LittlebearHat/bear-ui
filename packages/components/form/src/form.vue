<template>
  <form :class="bem.b()">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks/use-namespace'
import { Values } from 'async-validator'
import { provide } from 'vue'
import { formProps, FormContextKey, FormContext } from './form'
import { FormItemContext } from './form-item'
const bem = createNamespace('form')
defineOptions({
  name: 'z-form'
})

const props = defineProps(formProps)

const fields: FormItemContext[] = [] // 父亲收集儿子

// form的校验,在父级中调用所有儿子的校验方法
const validate = async (
  callback?: (valid: boolean, fields?: Values) => void
) => {
  let errors: Values = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch (error) {
      errors = {
        ...errors,
        ...(error as Values).fields
      }
    }
  }
  // 没有错误就成功
  if (Object.keys(errors).length === 0) {
    return callback?.(true)
  } else {
    // 有错误就失败
    if (callback) {
      callback?.(false, errors)
    } else {
      return Promise.reject(errors)
    }
  }
}

const addField: FormContext['addField'] = context => {
  fields.push(context)
}

const context = {
  ...props,
  addField
}
provide(FormContextKey, context)

// 将form表单的校验方法 暴露给用户，用户可以通过ref来进行检测
defineExpose({
  validate
})
</script>
