"use strict";
exports.__esModule = true;
function genTypesTemplate(name) {
    return "import { PropType } from 'vue'\nexport const ".concat(name, "Props = {\n\n} as const\n");
}
exports["default"] = genTypesTemplate;
