<template>
  <div @click="handleClick" :class="[bem.b()]">
    <template v-if="drag">
      <UploadDragger @file="uploadFiles">
        <slot></slot>
      </UploadDragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <input type="file"
      ref="inputRef"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange" 
    />
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@bear-ui/hooks'
import { ref } from 'vue'
import { httpRequest } from './ajax'
import { uploadProps, genId, UploadRawFile } from './upload'
import { uploadContentProps } from './upload-content'
import UploadDragger from './upload-dragger.vue'

const bem = createNamespace('upload') //b-upload
defineOptions({ name: 'b-upload', inheritAttrs: false })

const props = defineProps(uploadContentProps)


async function upload(rawfile: UploadRawFile) {
  //输入框清空
  inputRef.value!.value = '';//上传之前清空
  let result = await props.beforeUpload(rawfile)


  if (result === false) return props.onRemove(rawfile); //停止上传

  //添加上传的过程 ajax

  //上传文件 ajax 来做处理
  const { method, name, action, headers, data} = props  
  httpRequest({
    method,
    name,
    file:rawfile,
    action,
    headers,
    data,
    onError: e => {
      props.onError(e,rawfile);
    },
    onSuccess: (res) => {
      props.onSuccess(res,rawfile)
    },
    onProgress: (e) => {
      props.onProgress(e,rawfile)
    }
  })
}

function uploadFiles(files:FileList) {
  for (let i = 0; i < files.length; i++){
    const rawFile = files[i] as UploadRawFile;
    rawFile.uid = genId()
    props.onStart(rawFile)
    upload(rawFile)
  }
}
const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files!;

  uploadFiles(files)
  
}

const inputRef = ref<HTMLInputElement>()

const handleClick = () => {
  inputRef.value!.value = '';
  inputRef.value!.click()
}
</script>