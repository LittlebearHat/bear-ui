"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../packages/hooks/use-namespace/index.js");
const pagination = require("./pagination.js");
const pager = require("./pager.js");
const _hoisted_1 = ["disabled"];
const _hoisted_2 = ["disabled"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "pagination",
  props: pagination.paginationProps,
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    defineOptions({
      name: "b-pagination"
    });
    const bem = index.createNamespace("pagination");
    console.log("23123", props);
    const pager$1 = vue.ref();
    console.log("pager", pager$1);
    const disablePrev = vue.computed(
      () => pager$1.value ? pager$1.value.pageIndex < 2 : true
    );
    const disableNext = vue.computed(
      () => pager$1.value ? pager$1.value.pageIndex > pager$1.value.totalPage - 1 : true
    );
    const prevPage = () => {
      console.log("jinyong", disablePrev.value);
      pager$1.value.prevPage();
    };
    const nextPage = () => {
      pager$1.value.nextPage();
    };
    vue.onMounted(() => {
      vue.watch(
        () => pager$1.value.pageIndex,
        (newVal) => {
          emit("update:modelValue", newVal);
        }
      );
      vue.watch(
        () => props.modelValue,
        (newVal) => {
          pager$1.value.pageIndex = newVal;
        }
      );
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(vue.unref(bem).b())
      }, [
        vue.createElementVNode("button", {
          disabled: vue.unref(disablePrev),
          onClick: prevPage
        }, " < ", 8, _hoisted_1),
        vue.createVNode(vue.unref(pager.default), {
          ref_key: "pager",
          ref: pager$1,
          total: props.total,
          "page-size": props.pageSize,
          "pager-count": props.pagerCount
        }, null, 8, ["total", "page-size", "pager-count"]),
        vue.createElementVNode("button", {
          disabled: vue.unref(disableNext),
          onClick: nextPage
        }, " > ", 8, _hoisted_2)
      ], 2);
    };
  }
});
exports.default = _sfc_main;
//# sourceMappingURL=pagination.vue.js.map
