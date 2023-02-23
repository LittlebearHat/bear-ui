import { defineComponent, ref, computed, watch, resolveComponent, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createBlock, withCtx, resolveDynamicComponent, renderSlot } from "vue";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import { isString } from "../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { addUnit } from "../../packages/utils/style.js";
import { avatarProps, avatarEmits } from "./avatar.js";
import { isNumber } from "../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js";
const _hoisted_1 = ["src", "alt", "srcset"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "avatar",
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    defineOptions({
      //自动导入组件
      name: "b-avatar"
    });
    const bem = createNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [bem.b()];
      if (isString(size))
        classList.push(bem.m(size));
      if (icon)
        classList.push(bem.m("icon"));
      if (shape)
        classList.push(bem.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? bem.cssVarBlock({
        size: addUnit(size) || ""
      }) : void 0;
    });
    watch(
      () => props.src,
      () => hasLoadError.value = false
    );
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      const _component_b_icon = resolveComponent("b-icon");
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(avatarClass)),
        style: normalizeStyle(unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          onError: handleError
        }, null, 40, _hoisted_1)) : _ctx.icon ? (openBlock(), createBlock(_component_b_icon, { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=avatar.vue.js.map
