# Upload 上传

通过点击或者拖拽上传文件

## 基础用法

:::demo
<template #source>
<b-upload action="http://localhost:4000/upload" drag>
<b-button>点我上传</b-button>
</b-upload>
</template>

<script setup>
// const handleBeforUpload = (rawFile: UploadRawFile) => {
//   return true;
// }

</script>

```vue
<template #source>
  <b-upload action="" drag>
    <b-button>点我上传</b-button>
  </b-upload>
</template>

<script setup></script>
```

:::

## API

### Attribute

| 参数         | 说明                                                                                                    | 类型                            | 可选项 | 默认值 |
| ------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------- | ------ | ------ |
| action       | 必选参数，上传的地址                                                                                    | string                          | —      | —      |
| multiple     | 是否支持多选文件                                                                                        | boolean                         | —      | —      |
| name         | 上传的文件字段名                                                                                        | string                          | —      | —      |
| drag         | 是否启用拖拽上传                                                                                        | boolean                         | —      | false  |
| onPreview    | 点击文件列表中已上传的文件时的钩子                                                                      | function(file)                  | —      | —      |
| onChange     | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用                                          | function(file, fileList)        | —      | —      |
| onRemove     | 文件列表移除文件时的钩子                                                                                | function(file, fileList)boolean | —      | —      |
| onProgress   | 文件上传时的钩子                                                                                        | function(event, file, fileList) | —      | —      |
| onSuccess    | 文件上传成功时的钩子                                                                                    | function(event, file, fileList) | —      | —      |
| onError      | 文件上传失败时的钩子                                                                                    | function(err, file, fileList)   | —      | —      |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。           | function(file)                  | —      | —      |
| beforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。 | function(file, fileList)        | —      | —      |
