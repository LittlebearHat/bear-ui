"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../packages/hooks/use-namespace/index.js");
const icon = require("./icon.js");
const types = require("../../packages/utils/types.js");
const style = require("../../packages/utils/style.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "icon",
  props: icon.iconProps,
  setup(__props) {
    const props = __props;
    defineOptions({
      //自动导入组件
      name: "b-icon"
    });
    const bem = index.createNamespace("icon");
    const style$1 = vue.computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        // ...(size?{"font-size":size+ "px"}:{}),
        // ...(color?{color:color}:{})
        fontSize: types.isUndefined(size) ? void 0 : style.addUnit(size),
        color
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("i", {
        class: vue.normalizeClass(vue.unref(bem).b()),
        style: vue.normalizeStyle(vue.unref(style$1))
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=icon.vue.js.map
