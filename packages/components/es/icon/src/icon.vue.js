import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import { iconProps } from "./icon.js";
import { isUndefined } from "../../packages/utils/types.js";
import { addUnit } from "../../packages/utils/style.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const props = __props;
    defineOptions({
      //自动导入组件
      name: "b-icon"
    });
    const bem = createNamespace("icon");
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color)
        return {};
      return {
        // ...(size?{"font-size":size+ "px"}:{}),
        // ...(color?{color:color}:{})
        fontSize: isUndefined(size) ? void 0 : addUnit(size),
        color
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(unref(bem).b()),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=icon.vue.js.map
