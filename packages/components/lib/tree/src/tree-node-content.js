"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const tree = require("./tree.js");
const BTreeNodeContent = /* @__PURE__ */ vue.defineComponent({
  name: "BTreeNodeContent",
  props: tree.treeNodeContentProps,
  setup(props) {
    const treeContext = vue.inject(tree.treeInjectKey);
    const node = vue.toRef(props, "node");
    return () => {
      return (treeContext == null ? void 0 : treeContext.slots.default) ? treeContext == null ? void 0 : treeContext.slots.default({
        node: node.value
      }) : node.value.label;
    };
  }
});
exports.default = BTreeNodeContent;
//# sourceMappingURL=tree-node-content.js.map
