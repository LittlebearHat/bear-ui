import { createNamespace } from '@bear-ui/hooks'
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'
export default defineComponent({
  name: 'BVirtualList',
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
  setup(props, { slots }) {
    const bem = createNamespace('vl')
    const wrapperRef = ref<HTMLElement>()
    const barRef = ref<HTMLElement>()
    const state = reactive({
      start: 0,
      end: props.remain
    })
    const prev = computed(() => {
      return Math.min(state.start, props.remain)
    })
    const next = computed(() => {
      return Math.min(props.remain, props.items.length - state.end)
    })
    const visibleData = computed(() => {
      return props.items.slice(state.start - prev.value, state.end + next.value)
    })
    const offset = ref(0)
    const handleScroll = () => {
      // 算出来 当前滚过去⼏个了，当前从第⼏个显示
      let scrollTop = wrapperRef.value!.scrollTop
      state.start = Math.floor(scrollTop / props.size)
      state.end = state.start + props.remain
      offset.value = state.start * props.size - props.size * prev.value // 让可视区域调整
    }
    watch(
      () => props.items,
      () => {
        wrapperRef.value!.style.height = props.remain * props.size + 'px'
        barRef.value!.style.height = props.items.length * props.size + 'px'
      }
    )
    onMounted(() => {
      wrapperRef.value!.style.height = props.remain * props.size + 'px'
      barRef.value!.style.height = props.items.length * props.size + 'px'
    })
    return () => {
      return (
        <div class={bem.b()} ref={wrapperRef} onScroll={handleScroll}>
          <div class={bem.e('scroll-bar')} ref={barRef}></div>
          <div
            class={bem.e('scroll-list')}
            style={{
              transform: `translate3d(0,${offset.value}px,0)`
            }}
          >
            {visibleData.value.map((node, idx) => slots.default!({ node }))}
          </div>
        </div>
      )
    }
  }
})
