"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const reactivity_esmBundler = require("../../node_modules/.pnpm/@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
const index = require("../../packages/hooks/use-namespace/index.js");
const checkbox = require("./checkbox.js");
const _hoisted_1 = ["value", "disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "checkbox",
  props: checkbox.checkboxProps,
  emits: checkbox.checkboxEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = index.createNamespace("checkbox");
    defineOptions({ name: "b-checkbox" });
    const model = reactivity_esmBundler.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        return emit("update:modelValue", val);
      }
    });
    const inputRef = vue.ref();
    function indeterminate(val) {
      inputRef.value.indeterminate = val;
    }
    function handleChange(e) {
      const target = e.target;
      console.log("111", target.checked);
      const value = target.checked ? true : false;
      emit("change", value);
    }
    vue.watch(() => props.indeterminate, indeterminate);
    vue.onMounted(() => {
      indeterminate(props.indeterminate);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("label", {
        class: vue.normalizeClass(vue.unref(bem).b())
      }, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(vue.unref(bem).e("input"))
        }, [
          vue.withDirectives(vue.createElementVNode("input", {
            ref_key: "inputRef",
            ref: inputRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(model) ? model.value = $event : null),
            type: "checkbox",
            value: _ctx.label,
            disabled: _ctx.disabled,
            onChange: handleChange
          }, null, 40, _hoisted_1), [
            [vue.vModelCheckbox, vue.unref(model)]
          ])
        ], 2),
        _ctx.$slots.default || _ctx.label ? (vue.openBlock(), vue.createElementBlock("span", {
          key: 0,
          class: vue.normalizeClass(vue.unref(bem).e("label"))
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
          ], 64)) : vue.createCommentVNode("", true)
        ], 2)) : vue.createCommentVNode("", true)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=checkbox.vue.js.map
