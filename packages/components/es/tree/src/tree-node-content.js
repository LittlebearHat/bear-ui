import { defineComponent, inject, toRef } from "vue";
import { treeNodeContentProps, treeInjectKey } from "./tree.js";
const BTreeNodeContent = /* @__PURE__ */ defineComponent({
  name: "BTreeNodeContent",
  props: treeNodeContentProps,
  setup(props) {
    const treeContext = inject(treeInjectKey);
    const node = toRef(props, "node");
    return () => {
      return (treeContext == null ? void 0 : treeContext.slots.default) ? treeContext == null ? void 0 : treeContext.slots.default({
        node: node.value
      }) : node.value.label;
    };
  }
});
export {
  BTreeNodeContent as default
};
//# sourceMappingURL=tree-node-content.js.map
