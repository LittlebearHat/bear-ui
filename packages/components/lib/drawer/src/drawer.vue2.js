"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const drawer = require("./drawer.js");
const index = require("../../packages/hooks/use-namespace/index.js");
const _hoisted_1 = { class: "drawerHeader" };
const _hoisted_2 = { class: "drawerBody" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "drawer",
  props: drawer.drawerProps,
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
    const bem = index.createNamespace("drawer");
    console.log(bem.be("wrap", "content"));
    const computedDrawerPosition = vue.computed(() => {
      const positionObj = {
        width: props.direction == "left" || props.direction == "right" ? "30%" : "100%",
        height: props.direction == "top" || props.direction == "bottom" ? "30%" : "100%"
      };
      const dir = typeof props.direction !== "undefined" ? props.direction : "";
      positionObj[dir] = "0";
      console.log(positionObj);
      return positionObj;
    });
    const computedName = vue.computed(() => {
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
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: vue.unref(computedName).moveObj
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            class: vue.normalizeClass([vue.unref(bem).b(), { isShowDrawerMask: _ctx.mask }]),
            onClick: clickMaskCloseFn
          }, [
            vue.createElementVNode("div", {
              ref: "drawerContentRef",
              class: vue.normalizeClass(vue.unref(bem).e("content")),
              style: vue.normalizeStyle(vue.unref(computedDrawerPosition)),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
              }, ["stop"]))
            }, [
              vue.withDirectives(vue.createElementVNode("header", _hoisted_1, [
                vue.renderSlot(_ctx.$slots, "title", {}, () => [
                  vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
                ], true),
                vue.withDirectives(vue.createElementVNode("i", {
                  class: "close",
                  onClick: closeDrawer
                }, " close ", 512), [
                  [vue.vShow, _ctx.showCloseIcon]
                ])
              ], 512), [
                [vue.vShow, _ctx.isShowHeader]
              ]),
              vue.createElementVNode("section", _hoisted_2, [
                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ], 6)
          ], 2), [
            [vue.vShow, _ctx.isShowDrawer]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=drawer.vue2.js.map
