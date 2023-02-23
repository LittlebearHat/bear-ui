import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withDirectives, isRef, vModelCheckbox, renderSlot, Fragment, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { computed } from "../../node_modules/.pnpm/@vue_reactivity@3.2.45/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import { checkboxProps, checkboxEmits } from "./checkbox.js";
const _hoisted_1 = ["value", "disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props, { emit }) {
    const props = __props;
    const bem = createNamespace("checkbox");
    defineOptions({ name: "b-checkbox" });
    const model = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        return emit("update:modelValue", val);
      }
    });
    const inputRef = ref();
    function indeterminate(val) {
      inputRef.value.indeterminate = val;
    }
    function handleChange(e) {
      const target = e.target;
      console.log("111", target.checked);
      const value = target.checked ? true : false;
      emit("change", value);
    }
    watch(() => props.indeterminate, indeterminate);
    onMounted(() => {
      indeterminate(props.indeterminate);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(unref(bem).b())
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(bem).e("input"))
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "inputRef",
            ref: inputRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(model) ? model.value = $event : null),
            type: "checkbox",
            value: _ctx.label,
            disabled: _ctx.disabled,
            onChange: handleChange
          }, null, 40, _hoisted_1), [
            [vModelCheckbox, unref(model)]
          ])
        ], 2),
        _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(bem).e("label"))
        }, [
          renderSlot(_ctx.$slots, "default"),
          !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ], 64)) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=checkbox.vue.js.map
