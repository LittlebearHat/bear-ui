function withInstall(comp) {
  comp.install = function(app) {
    const { name } = comp;
    app.component(name, comp);
  };
  return comp;
}
export {
  withInstall
};
//# sourceMappingURL=install.js.map
