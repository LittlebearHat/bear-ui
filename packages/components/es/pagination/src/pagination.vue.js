import { defineComponent, ref, computed, onMounted, watch, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, createVNode } from "vue";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
import { paginationProps } from "./pagination.js";
import Pager from "./pager.js";
const _hoisted_1 = ["disabled"];
const _hoisted_2 = ["disabled"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pagination",
  props: paginationProps,
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    defineOptions({
      name: "b-pagination"
    });
    const bem = createNamespace("pagination");
    console.log("23123", props);
    const pager = ref();
    console.log("pager", pager);
    const disablePrev = computed(
      () => pager.value ? pager.value.pageIndex < 2 : true
    );
    const disableNext = computed(
      () => pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
    );
    const prevPage = () => {
      console.log("jinyong", disablePrev.value);
      pager.value.prevPage();
    };
    const nextPage = () => {
      pager.value.nextPage();
    };
    onMounted(() => {
      watch(
        () => pager.value.pageIndex,
        (newVal) => {
          emit("update:modelValue", newVal);
        }
      );
      watch(
        () => props.modelValue,
        (newVal) => {
          pager.value.pageIndex = newVal;
        }
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(bem).b())
      }, [
        createElementVNode("button", {
          disabled: unref(disablePrev),
          onClick: prevPage
        }, " < ", 8, _hoisted_1),
        createVNode(unref(Pager), {
          ref_key: "pager",
          ref: pager,
          total: props.total,
          "page-size": props.pageSize,
          "pager-count": props.pagerCount
        }, null, 8, ["total", "page-size", "pager-count"]),
        createElementVNode("button", {
          disabled: unref(disableNext),
          onClick: nextPage
        }, " > ", 8, _hoisted_2)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=pagination.vue.js.map
