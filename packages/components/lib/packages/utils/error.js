"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const shared_esmBundler = require("../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js");
class BearUiError extends Error {
  constructor(m) {
    super(m);
    this.name = "BearUiError";
  }
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = shared_esmBundler.isString(scope) ? new BearUiError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
exports.debugWarn = debugWarn;
//# sourceMappingURL=error.js.map
