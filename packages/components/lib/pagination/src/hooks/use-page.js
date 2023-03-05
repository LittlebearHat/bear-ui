"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
function usePage(defaultPageIndex = 1) {
  const pageIndex = vue.ref(defaultPageIndex);
  const setPageIndex = (curr) => {
    pageIndex.value = curr;
  };
  const jumpPage = (page) => {
    pageIndex.value += page;
  };
  const prevPage = () => jumpPage(-1);
  const nextPage = () => jumpPage(1);
  return { pageIndex, setPageIndex, jumpPage, prevPage, nextPage };
}
exports.default = usePage;
//# sourceMappingURL=use-page.js.map
