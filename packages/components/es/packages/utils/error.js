import { isString } from "../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js";
class BearUiError extends Error {
  constructor(m) {
    super(m);
    this.name = "BearUiError";
  }
}
function debugWarn(scope, message) {
  if (process.env.NODE_ENV !== "production") {
    const error = isString(scope) ? new BearUiError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
export {
  debugWarn
};
//# sourceMappingURL=error.js.map
