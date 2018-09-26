"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var a = index_1["default"].getInstance("testEvent");
var b = index_1["default"].getInstance("testEventq");
a.addListener("hello", function (e) { console.log(e); });
a.emit("hello", { hi: "22222" });
b.emit("hello", { hi: "22222" });
