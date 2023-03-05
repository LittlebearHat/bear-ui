"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const usePage = require("./hooks/use-page.js");
const utils = require("./hooks/utils.js");
const pager = require("./pager2.js");
const Pager = /* @__PURE__ */ vue.defineComponent({
  name: "Pager",
  props: pager.pagerProps,
  setup(props) {
    console.log("3123414124141", props);
    const {
      total,
      pageSize,
      pagerCount
    } = vue.toRefs(props);
    console.log(total);
    const totalPage = vue.computed(() => Math.ceil(total.value / pageSize.value));
    const {
      pageIndex,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage
    } = usePage.default();
    const centerPages = vue.computed(() => utils.getCenterPage(totalPage.value, pageIndex.value, pagerCount.value));
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
    return vue.createVNode("ul", {
      "class": "b-pager"
    }, [vue.createVNode("li", {
      "onClick": () => setPageIndex(1),
      "class": {
        current: pageIndex === 1
      }
    }, [vue.createTextVNode("1")]), totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && vue.createVNode("li", {
      "class": "more left",
      "onClick": () => jumpPage(-5)
    }, [vue.createTextVNode("...")]), centerPages.map((page) => vue.createVNode("li", {
      "onClick": () => setPageIndex(page),
      "class": {
        current: pageIndex === page
      }
    }, [page])), totalPage > pagerCount && pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && vue.createVNode("li", {
      "class": "more right",
      "onClick": () => jumpPage(5)
    }, [vue.createTextVNode("...")]), totalPage > 1 && vue.createVNode("li", {
      "onClick": () => setPageIndex(totalPage),
      "class": {
        current: pageIndex === totalPage
      }
    }, [totalPage])]);
  }
});
exports.default = Pager;
//# sourceMappingURL=pager.js.map
