"use strict";
exports.__esModule = true;
var eventemitter2_1 = require("eventemitter2");
var EventHandler = /** @class */ (function () {
    function EventHandler(config) {
        this.defaultConfig = {
            wildcard: true
        };
        this.server = new eventemitter2_1.EventEmitter2(config || this.defaultConfig);
    }
    EventHandler.getInstance = function (instanceName, config) {
        if (!this.instances[instanceName]) {
            this.instances[instanceName] = new EventHandler(config);
        }
        return this.instances[instanceName].server;
    };
    EventHandler.getInstances = function () {
        return this.instances;
    };
    EventHandler.instances = {};
    return EventHandler;
}());
exports["default"] = EventHandler;
