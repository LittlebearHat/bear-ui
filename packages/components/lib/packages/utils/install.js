"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function withInstall(comp) {
  comp.install = function(app) {
    const { name } = comp;
    app.component(name, comp);
  };
  return comp;
}
exports.withInstall = withInstall;
//# sourceMappingURL=install.js.map
