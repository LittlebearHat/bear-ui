"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index$1 = require("../../packages/hooks/use-namespace/index.js");
const shared_esmBundler = require("../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js");
const style = require("../../packages/utils/style.js");
const avatar = require("./avatar.js");
const index = require("../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js");
const _hoisted_1 = ["src", "alt", "srcset"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "avatar",
  props: avatar.avatarProps,
  emits: avatar.avatarEmits,
  setup(__props, { emit }) {
    const props = __props;
    defineOptions({
      //自动导入组件
      name: "b-avatar"
    });
    const bem = index$1.createNamespace("avatar");
    const hasLoadError = vue.ref(false);
    const avatarClass = vue.computed(() => {
      const { size, icon, shape } = props;
      const classList = [bem.b()];
      if (shared_esmBundler.isString(size))
        classList.push(bem.m(size));
      if (icon)
        classList.push(bem.m("icon"));
      if (shape)
        classList.push(bem.m(shape));
      return classList;
    });
    const sizeStyle = vue.computed(() => {
      const { size } = props;
      return index.isNumber(size) ? bem.cssVarBlock({
        size: style.addUnit(size) || ""
      }) : void 0;
    });
    vue.watch(
      () => props.src,
      () => hasLoadError.value = false
    );
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      const _component_b_icon = vue.resolveComponent("b-icon");
      return vue.openBlock(), vue.createElementBlock("span", {
        class: vue.normalizeClass(vue.unref(avatarClass)),
        style: vue.normalizeStyle(vue.unref(sizeStyle))
      }, [
        (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (vue.openBlock(), vue.createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          srcset: _ctx.srcSet,
          onError: handleError
        }, null, 40, _hoisted_1)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_b_icon, { key: 1 }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : vue.renderSlot(_ctx.$slots, "default", { key: 2 })
      ], 6);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=avatar.vue.js.map
