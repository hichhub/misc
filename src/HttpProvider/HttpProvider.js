"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var HttpProvider = /** @class */ (function () {
    function HttpProvider() {
    }
    HttpProvider.prototype.send = function (request) {
        return axios_1["default"]({
            data: request.body,
            url: request.url,
            headers: request.header,
            method: request.method
        }).then(function (response) {
            var responseObj = {
                statusCode: response.status,
                body: response.data.data,
                header: response.headers
            };
            return responseObj;
        });
    };
    return HttpProvider;
}());
exports["default"] = HttpProvider;
