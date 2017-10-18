"use strict";
exports.__esModule = true;
var ActiveUserService = /** @class */ (function () {
    function ActiveUserService() {
    }
    ActiveUserService.prototype.set = function (user) {
        this.activeUser = user;
    };
    ActiveUserService.prototype.get = function () {
        return this.activeUser;
    };
    return ActiveUserService;
}());
exports.ActiveUserService = ActiveUserService;
