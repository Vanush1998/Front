"use strict";
var md5_1 = require("ts-md5/dist/md5");
var HashService = (function () {
    function HashService() {
    }
    HashService.prototype.hash = function (input) {
        return md5_1.Md5.hashStr((input)).toString();
    };
    return HashService;
}());
exports.HashService = HashService;
//# sourceMappingURL=hashService.service.js.map