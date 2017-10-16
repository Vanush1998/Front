"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var activeUser_service_1 = require("./activeUser.service");
var UserPageComponent = (function () {
    function UserPageComponent(http, router, activeUserService) {
        this.http = http;
        this.router = router;
        this.activeUserService = activeUserService;
        this.activeUser = this.activeUserService.get();
        if (this.activeUserService.get() == null) {
            this.router.navigate(['/SignInPage']);
        }
    }
    UserPageComponent.prototype.editProfile = function () {
    };
    UserPageComponent.prototype.ngOnInit = function () {
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    core_1.Component({
        selector: 'user-page',
        templateUrl: './userPage.component.template.html',
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, activeUser_service_1.ActiveUserService])
], UserPageComponent);
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=userPage.component.js.map