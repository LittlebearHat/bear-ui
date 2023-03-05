"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const icon = require("../../icon/src/icon.js");
const avatarProps = {
  size: String,
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: icon.iconProps
  },
  src: {
    type: String,
    default: ""
  },
  alt: {
    type: String,
    default: ""
  },
  srcSet: {
    type: String,
    default: ""
  }
};
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
exports.avatarEmits = avatarEmits;
exports.avatarProps = avatarProps;
//# sourceMappingURL=avatar.js.map
