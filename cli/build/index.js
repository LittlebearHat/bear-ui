"use strict";
exports.__esModule = true;
console.log(111);
const commander_1 = require("commander");
const cmd = new commander_1.Command();
cmd
    .command('create')
    .description('创建一个模板')
    .option('-t --type<type>', '创建类型，可选值：component, lib-entry')
    .action(function (args) { return console.log(args); });
