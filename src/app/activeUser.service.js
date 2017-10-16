"use strict";
var ActiveUserService = (function () {
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
//# sourceMappingURL=activeUser.service.js.map