"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const index = require("../../packages/hooks/use-namespace/index.js");
const _Vertual = /* @__PURE__ */ vue.defineComponent({
  name: "BVirtualList",
  props: {
    size: {
      type: Number,
      default: 35
    },
    remain: {
      type: Number,
      default: 8
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, {
    slots
  }) {
    const bem = index.createNamespace("vl");
    const wrapperRef = vue.ref();
    const barRef = vue.ref();
    const state = vue.reactive({
      start: 0,
      end: props.remain
    });
    const prev = vue.computed(() => {
      return Math.min(state.start, props.remain);
    });
    const next = vue.computed(() => {
      return Math.min(props.remain, props.items.length - state.end);
    });
    const visibleData = vue.computed(() => {
      return props.items.slice(state.start - prev.value, state.end + next.value);
    });
    const offset = vue.ref(0);
    const handleScroll = () => {
      let scrollTop = wrapperRef.value.scrollTop;
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;
      offset.value = state.start * props.size - props.size * prev.value;
    };
    vue.watch(() => props.items, () => {
      wrapperRef.value.style.height = props.remain * props.size + "px";
      barRef.value.style.height = props.items.length * props.size + "px";
    });
    vue.onMounted(() => {
      wrapperRef.value.style.height = props.remain * props.size + "px";
      barRef.value.style.height = props.items.length * props.size + "px";
    });
    return () => {
      return vue.createVNode("div", {
        "class": bem.b(),
        "ref": wrapperRef,
        "onScroll": handleScroll
      }, [vue.createVNode("div", {
        "class": bem.e("scroll-bar"),
        "ref": barRef
      }, null), vue.createVNode("div", {
        "class": bem.e("scroll-list"),
        "style": {
          transform: `translate3d(0,${offset.value}px,0)`
        }
      }, [visibleData.value.map((node, idx) => slots.default({
        node
      }))])]);
    };
  }
});
exports.default = _Vertual;
//# sourceMappingURL=virtual.js.map
