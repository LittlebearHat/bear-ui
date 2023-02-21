"use strict";
exports.__esModule = true;
function genCoreTemplate(name) {
    return "<template></template>\n\n<script setup lang=\"ts\">\nimport { createNamespace } from '@bear-ui/hooks'\nimport { ".concat(name, "Props } from './").concat(name, "'\ndefineOptions({\n  name: 'b-").concat(name, "'\n})\nconst bem = createNamespace('").concat(name, "')\nconst props = defineProps(").concat(name, "Props)\n</script>\n\n<style></style>");
}
exports["default"] = genCoreTemplate;
