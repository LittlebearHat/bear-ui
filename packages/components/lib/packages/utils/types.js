"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const shared_esmBundler = require("../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js");
const isUndefined = (val) => val === void 0;
const isStringNumber = (val) => {
  if (!shared_esmBundler.isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
exports.isArray = shared_esmBundler.isArray;
exports.isFunction = shared_esmBundler.isFunction;
exports.isString = shared_esmBundler.isString;
exports.isStringNumber = isStringNumber;
exports.isUndefined = isUndefined;
//# sourceMappingURL=types.js.map
