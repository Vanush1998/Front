"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SignInComponent = /** @class */ (function () {
    function SignInComponent(hash, http, router, activeUserService) {
        this.hash = hash;
        this.http = http;
        this.router = router;
        this.activeUserService = activeUserService;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSignIn = function () {
        var _this = this;
        var router = this.router;
        var params = new http_2.URLSearchParams();
        params.append('type', 'signIn');
        var options = new http_1.RequestOptions({
            search: params
        });
        this.http.post('http://localhost:8080/MyServlet', JSON.stringify({
            username: this.inputUsername,
            password: this.hash.hash(this.inputPassword)
        }), options)
            .toPromise()
            .then(function (response) {
            _this.activeUserService.set(JSON.parse(response._body));
            router.navigate(['/UserPage']);
        })["catch"](function (reason) {
            console.log(reason.toString());
        });
    };
    SignInComponent.prototype.onSignUp = function () {
        this.router.navigate(['/SignUpPage']);
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'app-login-page',
            templateUrl: './signIn.component.template.html'
        })
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;