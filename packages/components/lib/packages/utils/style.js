"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const types = require("./types.js");
const error = require("./error.js");
const index = require("../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js");
const shared_esmBundler = require("../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js");
const SCOPE = "utils/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (index.isNumber(value) || types.isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (shared_esmBundler.isString(value)) {
    return value;
  }
  error.debugWarn(SCOPE, "绑定值必须为number或者string");
}
exports.addUnit = addUnit;
//# sourceMappingURL=style.js.map
