import { defineComponent, createVNode } from "vue";
const Switcher = /* @__PURE__ */ defineComponent({
  name: "Switcher",
  render() {
    return createVNode("svg", {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 32 32"
    }, [createVNode("path", {
      "d": "M12 8l10 8l-10 8z"
    }, null)]);
  }
});
export {
  Switcher as default
};
//# sourceMappingURL=Switcher.js.map
