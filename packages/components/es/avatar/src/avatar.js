import { iconProps } from "../../icon/src/icon.js";
const avatarProps = {
  size: String,
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconProps
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
export {
  avatarEmits,
  avatarProps
};
//# sourceMappingURL=avatar.js.map
