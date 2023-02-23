import { BIcon } from "./icon/index.js";
import { Drawer } from "./drawer/index.js";
import { BAvatar } from "./avatar/index.js";
import { BTree } from "./tree/index.js";
import BPagination from "./pagination/index.js";
import BCheckbox from "./checkbox/index.js";
import "./packages/theme-chalk/src/index.scss.js";
import { iconProps } from "./icon/src/icon.js";
import { drawerProps } from "./drawer/src/drawer.js";
import { avatarEmits, avatarProps } from "./avatar/src/avatar.js";
import { treeEmitts, treeInjectKey, treeNodeContentProps, treeNodeEmitts, treeNodeProps, treeProps } from "./tree/src/tree.js";
import { paginationProps } from "./pagination/src/pagination.js";
const plugins = [BAvatar, BIcon, BTree, BCheckbox, BPagination];
export {
  BAvatar,
  BIcon,
  BTree,
  Drawer,
  avatarEmits,
  avatarProps,
  plugins as default,
  drawerProps,
  iconProps,
  paginationProps,
  treeEmitts,
  treeInjectKey,
  treeNodeContentProps,
  treeNodeEmitts,
  treeNodeProps,
  treeProps
};
//# sourceMappingURL=index.js.map
