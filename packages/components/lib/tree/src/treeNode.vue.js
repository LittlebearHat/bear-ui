"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../icon/index.js");
const Switcher = require("./icon/Switcher.js");
const index$2 = require("../../packages/hooks/use-namespace/index.js");
const tree = require("./tree.js");
const Loading = require("./icon/Loading.js");
const treeNodeContent = require("./tree-node-content.js");
const index$1 = require("../../checkbox/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "treeNode",
  props: tree.treeNodeProps,
  emits: tree.treeNodeEmitts,
  setup(__props, { emit }) {
    const props = __props;
    const bem = index$2.createNamespace("tree-node");
    function handleExpand() {
      emit("toggle", props.node);
    }
    const isLoading = vue.computed(() => {
      return props.loadingKeys.has(props.node.key);
    });
    const isSelected = vue.computed(() => {
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
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([
          vue.unref(bem).b(),
          vue.unref(bem).is("selected", vue.unref(isSelected)),
          vue.unref(bem).is("disabled", _ctx.node.disabled)
        ])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(vue.unref(bem).e("content")),
          style: vue.normalizeStyle({ paddingLeft: `${_ctx.node.level * 16}px` })
        }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass([
              vue.unref(bem).e("expand-icon"),
              { expanded: _ctx.expanded && !_ctx.node.isLeaf },
              vue.unref(bem).is("leaf", _ctx.node.isLeaf)
            ]),
            onClick: handleExpand
          }, [
            vue.createVNode(vue.unref(index.BIcon), null, {
              default: vue.withCtx(() => [
                !vue.unref(isLoading) ? (vue.openBlock(), vue.createBlock(vue.unref(Switcher.default), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(Loading.default), { key: 1 }))
              ]),
              _: 1
            })
          ], 2),
          _ctx.showCheckbox ? (vue.openBlock(), vue.createBlock(vue.unref(index$1.default), {
            key: 0,
            "model-value": _ctx.checked,
            indeterminate: _ctx.indeterminate,
            disabled: _ctx.disabled,
            onChange: handleCheckChange
          }, null, 8, ["model-value", "indeterminate", "disabled"])) : vue.createCommentVNode("", true),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(vue.unref(bem).e("label")),
            onClick: handleSelect
          }, [
            vue.createVNode(vue.unref(treeNodeContent.default), { node: _ctx.node }, null, 8, ["node"])
          ], 2)
        ], 6)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=treeNode.vue.js.map
