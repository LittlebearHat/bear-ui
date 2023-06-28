<template>
  <UploadContent v-bind="uploadContentProps">
    <slot></slot>
  </UploadContent>
  <!-- {{uploadFiles}} -->
</template>

<script lang="ts" setup>
import { computed, ref, watch} from 'vue';
import { uploadProps,UploadFile, UploadFiles, UploadRawFile} from './upload';
import {UploadContentProps} from './upload-content'
import UploadContent from './upload-content.vue';
defineOptions({ name: 'b-upload' })
//父组件接受了uploadProps
const props = defineProps(uploadProps)
const emit = defineEmits({})
//props中的数据是动态的，改了后，计算属性也可以修改
const uploadFiles = ref<UploadFiles>(props.FileList)

watch(uploadFiles, (newVal) => {
  //监控文件变化 发射事件
  emit('onUpdate:file-list',newVal)
})

const findFile = (rawFile: UploadRawFile) => {
  return uploadFiles.value.find(file=>file.uid ===rawFile.uid)
}

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  onStart: (rawFile) => {
    //上传之前的逻辑
    console.log('start');
    const uploadFile: UploadFile = {
      uid: rawFile.uid,
      name: rawFile.name,
      percentage: 0,
      raw: rawFile,
      size: rawFile.size,
      status:'start'
    }
    uploadFile.url = URL.createObjectURL(rawFile)   //这个字段可以实现预览
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile)
   },
  onProgress: (e,rawFile) => { 
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = 'uploading'
    uploadFile.percentage = e.pecetange
    props.onProgress(e,uploadFile,uploadFiles.value!)
  },
  onRemove:async (rawFile) => { 
    const uploadFile = findFile(rawFile)!;
    const r = await props.beforeRemove(uploadFile, uploadFiles.value)
    if (r != false) {
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(uploadFile), 1)
      props.onRemove(uploadFile,uploadFiles.value)
    }
  },
  onError: (err,rawFile) => {
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = 'error'
    const fileList = uploadFiles.value;
    fileList.splice(fileList.indexOf(uploadFile), 1)
    props.onError(err,uploadFile,fileList)
   },
  onSuccess: (res,rawFile) => {
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = 'success';
    const fileList = uploadFiles.value;
    props.onError(res,uploadFile,fileList)
  }
}))


</script>