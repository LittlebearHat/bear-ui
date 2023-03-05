import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, createVNode, withCtx, createBlock, createCommentVNode } from "vue";
import { BIcon } from "../../icon/index.js";
import Switcher from "./icon/Switcher.js";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import { treeNodeProps, treeNodeEmitts } from "./tree.js";
import Loading from "./icon/Loading.js";
import BTreeNodeContent from "./tree-node-content.js";
import BCheckbox from "../../checkbox/index.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "treeNode",
  props: treeNodeProps,
  emits: treeNodeEmitts,
  setup(__props, { emit }) {
    const props = __props;
    const bem = createNamespace("tree-node");
    function handleExpand() {
      emit("toggle", props.node);
    }
    const isLoading = computed(() => {
      return props.loadingKeys.has(props.node.key);
    });
    const isSelected = computed(() => {
      return props.selectedKeys.includes(props.node.key);
    });
    function handleSelect() {
      if (props.node.disabled)
        return;
      emit("select", props.node);
    }
    function handleCheckChange(value) {
      emit("check", props.node, value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(bem).b(),
          unref(bem).is("selected", unref(isSelected)),
          unref(bem).is("disabled", _ctx.node.disabled)
        ])
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(bem).e("content")),
          style: normalizeStyle({ paddingLeft: `${_ctx.node.level * 16}px` })
        }, [
          createElementVNode("span", {
            class: normalizeClass([
              unref(bem).e("expand-icon"),
              { expanded: _ctx.expanded && !_ctx.node.isLeaf },
              unref(bem).is("leaf", _ctx.node.isLeaf)
            ]),
            onClick: handleExpand
          }, [
            createVNode(unref(BIcon), null, {
              default: withCtx(() => [
                !unref(isLoading) ? (openBlock(), createBlock(unref(Switcher), { key: 0 })) : (openBlock(), createBlock(unref(Loading), { key: 1 }))
              ]),
              _: 1
            })
          ], 2),
          _ctx.showCheckbox ? (openBlock(), createBlock(unref(BCheckbox), {
            key: 0,
            "model-value": _ctx.checked,
            indeterminate: _ctx.indeterminate,
            disabled: _ctx.disabled,
            onChange: handleCheckChange
          }, null, 8, ["model-value", "indeterminate", "disabled"])) : createCommentVNode("", true),
          createElementVNode("span", {
            class: normalizeClass(unref(bem).e("label")),
            onClick: handleSelect
          }, [
            createVNode(unref(BTreeNodeContent), { node: _ctx.node }, null, 8, ["node"])
          ], 2)
        ], 6)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=treeNode.vue.js.map
