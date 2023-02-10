import _Modal from "./src/modal.vue"
import {withInstall} from "@bear-ui/utils"
export const Modal=withInstall(_Modal)
export default Modal
// export * from "./src/modal"

declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
      BModal:typeof _Modal
    }
}