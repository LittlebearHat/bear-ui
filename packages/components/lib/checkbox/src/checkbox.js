"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("../../node_modules/.pnpm/@vueuse_shared@9.11.1_vue@3.2.45/node_modules/@vueuse/shared/index.js");
const checkboxProps = {
  modelValue: {
    type: [Boolean, Number, String]
  },
  label: {
    type: [Boolean, Number, String]
  },
  indeterminate: Boolean,
  disabled: Boolean
};
const checkboxEmits = {
  "update:modelValue": (value) => index.isBoolean(value),
  change: (value) => index.isBoolean(value)
};
exports.checkboxEmits = checkboxEmits;
exports.checkboxProps = checkboxProps;
//# sourceMappingURL=checkbox.js.map
