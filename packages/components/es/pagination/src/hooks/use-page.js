import { ref } from "vue";
function usePage(defaultPageIndex = 1) {
  const pageIndex = ref(defaultPageIndex);
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
export {
  usePage as default
};
//# sourceMappingURL=use-page.js.map
