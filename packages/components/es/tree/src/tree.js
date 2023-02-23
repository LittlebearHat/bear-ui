import { isBoolean } from "../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js";
const treeProps = {
  data: {
    type: Array,
    default: () => []
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  onLoad: Function,
  selectedKeys: {
    type: Array
  },
  selectable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    default: false
  }
};
const treeNodeProps = {
  node: {
    type: Object,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  loadingKeys: {
    type: Object
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  showCheckbox: {
    type: Boolean,
    required: false
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean
};
const treeNodeEmitts = {
  toggle: (node) => node,
  select: (node) => node,
  check: (node, value) => isBoolean(value)
};
const treeEmitts = {
  "update:selectedKeys": (keys) => keys
};
const treeInjectKey = Symbol();
const treeNodeContentProps = {
  node: {
    type: Object,
    required: true
  }
};
export {
  treeEmitts,
  treeInjectKey,
  treeNodeContentProps,
  treeNodeEmitts,
  treeNodeProps,
  treeProps
};
//# sourceMappingURL=tree.js.map
