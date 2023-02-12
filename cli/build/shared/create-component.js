"use strict";
exports.__esModule = true;
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var kolorist_1 = require("kolorist");
var core_1 = require("../template/core");
var types_1 = require("../template/types");
var template_1 = require("../template");
var WRITE_FILE_OPTIONS = { encoding: 'utf-8' };
function createComponent(meta) {
    var name = meta.name;
    var componentDir = (0, path_1.resolve)('../packages/components', name);
    console.log(componentDir);
    var compSrcDir = (0, path_1.resolve)(componentDir, 'src');
    var testDir = (0, path_1.resolve)(componentDir, '__tests__');
    (0, fs_extra_1.ensureDirSync)(compSrcDir);
    (0, fs_extra_1.ensureDirSync)(testDir);
    var coreFilePath = (0, path_1.resolve)(compSrcDir, name + '.vue');
    (0, fs_extra_1.writeFileSync)(coreFilePath, (0, core_1["default"])(name), WRITE_FILE_OPTIONS);
    var typesFilePath = (0, path_1.resolve)(compSrcDir, name + '.ts');
    (0, fs_extra_1.writeFileSync)(typesFilePath, (0, types_1["default"])(name), WRITE_FILE_OPTIONS);
    var indexFilePath = componentDir + "/index.ts";
    (0, fs_extra_1.writeFileSync)(indexFilePath, (0, template_1["default"])(name), WRITE_FILE_OPTIONS);
    console.log((0, kolorist_1.lightGreen)("\u2714\uFE0F \u7EC4\u4EF6".concat(name, "\u76EE\u5F55\u521B\u5EFA\u751F\u6210")));
    console.log((0, kolorist_1.lightBlue)("\u2714\uFE0F \u7EC4\u4EF6\u76EE\u5F55\uFF1A".concat(componentDir)));
}
exports["default"] = createComponent;
