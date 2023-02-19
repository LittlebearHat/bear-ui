"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var create_1 = require("../command/create");
var cmd = new commander_1.Command();
cmd
    .command('create')
    .description('创建一个模板')
    .option('-t --type <type>', '创建类型，可选值：component, lib-entry')
    .action(create_1.onCreate);
cmd.parse();
