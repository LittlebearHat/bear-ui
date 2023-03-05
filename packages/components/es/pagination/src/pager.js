import { defineComponent, toRefs, computed, createVNode, createTextVNode } from "vue";
import usePage from "./hooks/use-page.js";
import { getCenterPage } from "./hooks/utils.js";
import { pagerProps } from "./pager2.js";
const Pager = /* @__PURE__ */ defineComponent({
  name: "Pager",
  props: pagerProps,
  setup(props) {
    console.log("3123414124141", props);
    const {
      total,
      pageSize,
      pagerCount
    } = toRefs(props);
    console.log(total);
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value));
    const {
      pageIndex,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage
    } = usePage();
    const centerPages = computed(() => getCenterPage(totalPage.value, pageIndex.value, pagerCount.value));
    return {
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage,
      centerPages
    };
  },
  render() {
    const {
      pagerCount,
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      centerPages
    } = this;
    return createVNode("ul", {
      "class": "b-pager"
    }, [createVNode("li", {
      "onClick": () => setPageIndex(1),
      "class": {
        current: pageIndex === 1
      }
    }, [createTextVNode("1")]), totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && createVNode("li", {
      "class": "more left",
      "onClick": () => jumpPage(-5)
    }, [createTextVNode("...")]), centerPages.map((page) => createVNode("li", {
      "onClick": () => setPageIndex(page),
      "class": {
        current: pageIndex === page
      }
    }, [page])), totalPage > pagerCount && pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && createVNode("li", {
      "class": "more right",
      "onClick": () => jumpPage(5)
    }, [createTextVNode("...")]), totalPage > 1 && createVNode("li", {
      "onClick": () => setPageIndex(totalPage),
      "class": {
        current: pageIndex === totalPage
      }
    }, [totalPage])]);
  }
});
export {
  Pager as default
};
//# sourceMappingURL=pager.js.map
