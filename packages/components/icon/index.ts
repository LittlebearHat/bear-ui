import _Icon from "./src/icon.vue"
import {withInstall} from "@bear-ui/utils"
const BIcon=withInstall(_Icon)
console.log("BICCC",BIcon)
export default BIcon
export * from "./src/icon"
declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
        BIcon:typeof BIcon
    }
}