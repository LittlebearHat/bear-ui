import _Drawer from "./src/drawer.vue"
import {withInstall} from "@bear-ui/utils"
export const Drawer=withInstall(_Drawer)
export default Drawer
export * from "./src/drawer"

declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
      BDrawer:typeof Drawer
    }
}