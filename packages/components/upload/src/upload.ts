import { before } from "node:test"
import { type } from "os"
import { ExtractPropTypes, PropType } from "vue"

export {}

//编写组件的时候，需要定义组件需要的类型 有了属性后去实现

//给每个文件进行包装 包装一个全新的文件

export interface UploadFile{
  uid?: number,
  name: string,
  url?: string   //new ObjectURL
  percentage?: number,
  raw?: File,
  size?: number,
  status: string
}
export type UploadFiles = UploadFile[]


//给组件的使用也定义一些类型,给用户使用的
export const baseProps = {
  FileList: {
    type: Array as PropType<UploadFiles>,
    default:()=>[] as const
  },
  action: {
    type: String,
    default:''
  },
  multiple: {
    type: Boolean,
    default:false
  },
  //input中所需要的类型
  name: {
    type: String,
    default:'file'
  },
  accept: {
    type: String,
    default:''
  },
  //上传文件ajax需要的
  method: {
    type: String,
    default:'post'
  },
  headers: {
    type: Object,
    default:()=> ({})
  },
  data: {
    type: Object,
    default:()=>({})
  },
  drag: {
    type: Boolean,
    default:false
  }
} as const 

export type UploadRawFile = File & { uid: number }
export type UploadProgressEvent = ProgressEvent & ({ pecetange: number })
const NOOP = () => {}

export const uploadProps = {
  ...baseProps,
  onPreview: {  //预览的时候用这个回调拿到上次的图片
    type: Function as PropType<(file: UploadFile) => void>,
    default:NOOP
  },
  beforeUpload: {
    type: Function as PropType<(file: UploadRawFile) => Promise<boolean> | boolean>,
    default:NOOP
  },
  onChange: {
    type: Function as PropType<(file: UploadFile) => void>,
    default:NOOP
  },
  beforeRemove: {
    type: Function as PropType<(file: UploadFile, UploadFiles: UploadFiles) => Promise<boolean>|boolean>,
    default:NOOP
  },
  onRemove: {
    type: Function as PropType<(file: UploadFile, UploadFiles: UploadFiles) => void>,
    default:NOOP
  },
  onProgress: {
    type: Function as PropType<(file: UploadProgressEvent, UploadFile: UploadFile, UploadFiles: UploadFiles) => void>,
    default:NOOP
  },
  onSuccess: {
    type: Function as PropType<(response: any, UploadFile: UploadFile, UploadFiles: UploadFiles) => void>,
    default:NOOP
  },
  onError: {
    type: Function as PropType<(err: any, UploadFile: UploadFile, UploadFiles: UploadFiles) => void>,
    default:NOOP
  }
} as const

export type UploadProps = ExtractPropTypes<typeof uploadProps>

let id = 0;
export const genId = () => id++