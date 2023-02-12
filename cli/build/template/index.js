"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function genIndexTemplate(name) {
    var compName = (0, utils_1.upperFirst)(name);
    return "\nimport _".concat(compName, " from './src/").concat(name, "'\nimport { withInstall } from '@bear-ui/utils'\n\nconst B").concat(compName, " = withInstall(_").concat(compName, ")\n\nexport default B").concat(compName, "\n\nexport * from './src/").concat(name, "'\n\ndeclare module 'vue' {\n  export interface GlobalComponents {\n    B").concat(compName, ": typeof B").concat(compName, "\n  }\n}\n");
}
exports["default"] = genIndexTemplate;
