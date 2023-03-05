import { isString } from "../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js";
import { isArray, isFunction } from "../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js";
const isUndefined = (val) => val === void 0;
const isStringNumber = (val) => {
  if (!isString(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
export {
  isArray,
  isFunction,
  isString,
  isStringNumber,
  isUndefined
};
//# sourceMappingURL=types.js.map
