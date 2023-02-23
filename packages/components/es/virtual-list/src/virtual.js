import { defineComponent, ref, reactive, computed, watch, onMounted, createVNode } from "vue";
import { createNamespace } from "../../packages/hooks/use-namespace/index.js";
const _Vertual = /* @__PURE__ */ defineComponent({
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
    const bem = createNamespace("vl");
    const wrapperRef = ref();
    const barRef = ref();
    const state = reactive({
      start: 0,
      end: props.remain
    });
    const prev = computed(() => {
      return Math.min(state.start, props.remain);
    });
    const next = computed(() => {
      return Math.min(props.remain, props.items.length - state.end);
    });
    const visibleData = computed(() => {
      return props.items.slice(state.start - prev.value, state.end + next.value);
    });
    const offset = ref(0);
    const handleScroll = () => {
      let scrollTop = wrapperRef.value.scrollTop;
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;
      offset.value = state.start * props.size - props.size * prev.value;
    };
    watch(() => props.items, () => {
      wrapperRef.value.style.height = props.remain * props.size + "px";
      barRef.value.style.height = props.items.length * props.size + "px";
    });
    onMounted(() => {
      wrapperRef.value.style.height = props.remain * props.size + "px";
      barRef.value.style.height = props.items.length * props.size + "px";
    });
    return () => {
      return createVNode("div", {
        "class": bem.b(),
        "ref": wrapperRef,
        "onScroll": handleScroll
      }, [createVNode("div", {
        "class": bem.e("scroll-bar"),
        "ref": barRef
      }, null), createVNode("div", {
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
export {
  _Vertual as default
};
//# sourceMappingURL=virtual.js.map
