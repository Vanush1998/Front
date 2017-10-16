"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var signIn_component_1 = require("./signIn.component");
var userPage_component_1 = require("./userPage.component");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var signUp_component_1 = require("./signUp.component");
var hashService_service_1 = require("./hashService.service");
var activeUser_service_1 = require("./activeUser.service");
var md5_1 = require("ts-md5/dist/md5");
var appRoutes = [
    { path: '', redirectTo: 'SignInPage', pathMatch: 'full' },
    { path: 'SignInPage', component: signIn_component_1.SignInComponent },
    { path: 'UserPage', component: userPage_component_1.UserPageComponent },
    { path: 'SignUpPage', component: signUp_component_1.SignUpComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes), http_1.HttpModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, userPage_component_1.UserPageComponent, signIn_component_1.SignInComponent, signUp_component_1.SignUpComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [md5_1.Md5, hashService_service_1.HashService, activeUser_service_1.ActiveUserService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map