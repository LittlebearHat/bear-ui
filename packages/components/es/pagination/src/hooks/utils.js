const getCenterPage = (totalPage, pageIndex, pagerCount) => {
  const totalPageArr = Array.from(Array(totalPage).keys());
  if (totalPage <= pagerCount) {
    return totalPageArr.slice(2, totalPage);
  } else {
    const middle = Math.ceil(pagerCount / 2);
    if (pageIndex <= middle) {
      return totalPageArr.slice(2, pagerCount);
    } else if (pageIndex >= totalPage - middle + 1) {
      return totalPageArr.slice(totalPage - pagerCount + 2, totalPage);
    } else {
      return totalPageArr.slice(pageIndex - middle + 2, pageIndex + middle - 1);
    }
  }
};
export {
  getCenterPage
};
//# sourceMappingURL=utils.js.map
