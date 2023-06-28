<template>
  <b-form 
    ref="formRef" 
    :model="state" 
    :rules="{
      username:{
        min:6,
        max:10,
        message:'用户名字6-10位',
        trigger:['change','blur']
      }
    }"
  >
    <b-form-item 
      prop="username"
      :rules="[{required:true, message:'请输入姓名',trigger:'blur'}]"
    >
      <b-input 
        v-model="state.username" 
        placeholder="请输入用户名"
      />
      <template #label>用户名</template>
    </b-form-item>

    <b-form-item 
      prop="password"
      :rules="[{required:true, message:'请输入密码',trigger:'blur'}]"
    >
      <b-input 
        v-model="state.password" 
        placeholder="请输入密码" 
        type="password"
      />
      <template #label>密码</template>
    </b-form-item>
    <b-button a="1" b="2" size="medium" type="primary" :round="true" @click="validateForm">
      按钮
    </b-button>
  </b-form>
</template>

<script setup lang="ts">
// console.log(Icon);
import { ref, computed } from 'vue'
import { reactive } from 'vue'
import{FormInstance} from '@bear-ui/components/form'
const state = reactive({ username: '', password: '' })
const formRef = ref<FormInstance>()

const validateForm = () => {
  const form = formRef.value
  form?.validate((valid, errors) => {
    console.log(valid,errors);
    
  })
}
</script>