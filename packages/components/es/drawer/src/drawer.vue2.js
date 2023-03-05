import { defineComponent, computed, openBlock, createBlock, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, withModifiers, renderSlot, toDisplayString, vShow } from "vue";
import { drawerProps } from "./drawer.js";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
const _hoisted_1 = { class: "drawerHeader" };
const _hoisted_2 = { class: "drawerBody" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "drawer",
  props: drawerProps,
  emits: ["update:isShowDrawer", "shutDown"],
  setup(__props, { emit }) {
    const props = __props;
    const moveObj = {
      top: "topMove",
      bottom: "bottomMove",
      left: "leftMove",
      right: "rightMove"
    };
    defineOptions({
      name: "b-drawer"
    });
    const bem = createNamespace("drawer");
    console.log(bem.be("wrap", "content"));
    const computedDrawerPosition = computed(() => {
      const positionObj = {
        width: props.direction == "left" || props.direction == "right" ? "30%" : "100%",
        height: props.direction == "top" || props.direction == "bottom" ? "30%" : "100%"
      };
      const dir = typeof props.direction !== "undefined" ? props.direction : "";
      positionObj[dir] = "0";
      console.log(positionObj);
      return positionObj;
    });
    const computedName = computed(() => {
      return {
        moveObj: typeof props.direction !== "undefined" ? moveObj[props.direction] : ""
      };
    });
    function clickMaskCloseFn() {
      if (props.clickMaskClose == true) {
        closeDrawer();
      } else {
        return;
      }
    }
    function closeDrawer() {
      if (props.beforeClose) {
        props.beforeClose(close);
      } else {
        close();
      }
    }
    function close() {
      emit("update:isShowDrawer", false);
      emit("shutDown");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(computedName).moveObj
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass([unref(bem).b(), { isShowDrawerMask: _ctx.mask }]),
            onClick: clickMaskCloseFn
          }, [
            createElementVNode("div", {
              ref: "drawerContentRef",
              class: normalizeClass(unref(bem).e("content")),
              style: normalizeStyle(unref(computedDrawerPosition)),
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              withDirectives(createElementVNode("header", _hoisted_1, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createElementVNode("span", null, toDisplayString(_ctx.title), 1)
                ], true),
                withDirectives(createElementVNode("i", {
                  class: "close",
                  onClick: closeDrawer
                }, " close ", 512), [
                  [vShow, _ctx.showCloseIcon]
                ])
              ], 512), [
                [vShow, _ctx.isShowHeader]
              ]),
              createElementVNode("section", _hoisted_2, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ], 6)
          ], 2), [
            [vShow, _ctx.isShowDrawer]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=drawer.vue2.js.map
