# 此为utils公共函数库文档

## install.ts

`withInstall(app)`:抽离出来的注册vue组件

## types.ts

`isArrray()`:是否为数组

`isFunction()`:是否为函数

`isObject()`:是否为对象

`isString()`:是否为字符串

`isDate()`:是否为Date

`isPromise()`:是否为promise实例

`isSymbol()`:是否为symbol

`isBoolen()`:是否为布尔值

`isNumber()`:是否为数字

`isUndefined()`:是否未初始化

`isEmpty()`:是否为空

`isElement()`:

`isStringNumber()`

## style.ts

`addUnit(val?:string | number,default="px")`:添加一个类型

## error.ts

debugWarn(scope:string|Error,message?:string):在开发环境中抛出路径以及错误信息