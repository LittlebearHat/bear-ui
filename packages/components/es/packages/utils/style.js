import { isStringNumber } from "./types.js";
import { debugWarn } from "./error.js";
import { isNumber } from "../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js";
import { isString } from "../../node_modules/.pnpm/@vue_shared@3.2.45/node_modules/@vue/shared/dist/shared.esm-bundler.js";
const SCOPE = "utils/style";
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if (isNumber(value) || isStringNumber(value)) {
    return `${value}${defaultUnit}`;
  } else if (isString(value)) {
    return value;
  }
  debugWarn(SCOPE, "绑定值必须为number或者string");
}
export {
  addUnit
};
//# sourceMappingURL=style.js.map
