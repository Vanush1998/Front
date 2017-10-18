"use strict";
exports.__esModule = true;
var md5_1 = require("ts-md5/dist/md5");
var HashService = /** @class */ (function () {
    function HashService() {
    }
    HashService.prototype.hash = function (input) {
        return md5_1.Md5.hashStr((input)).toString();
    };
    return HashService;
}());
exports.HashService = HashService;
