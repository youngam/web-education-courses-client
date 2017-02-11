/**
 * Created by alex on 2/7/17.
 */
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
var auth_service_1 = require("./auth.service");
var AuthComponent = (function () {
    function AuthComponent(authService) {
        this.authService = authService;
    }
    AuthComponent.prototype.onSignUpClick = function (name, password) {
        var _this = this;
        this.authService.signUpUser(name, password).subscribe(function (response) {
            if (response.errorMessage != null)
                _this.showError(response.errorMessage);
            else
                _this.setUserInfo(response);
        });
    };
    AuthComponent.prototype.onSignInClick = function (name, password) {
        var _this = this;
        this.authService.signInUser(name, password).subscribe(function (response) {
            if (response.errorMessage != null)
                _this.showError(response.errorMessage);
            else
                _this.setUserInfo(response);
        });
    };
    AuthComponent.prototype.showError = function (errorMessage) {
        console.log("RESPONSE error: " + errorMessage);
        //TODO show error view
    };
    AuthComponent.prototype.setUserInfo = function (userProfile) {
        console.log("RESPONSE user: " + userProfile.name + " " + userProfile.id);
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'auth-component',
            templateUrl: './auth.component.html',
            styleUrls: ['auth.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=auth.component.js.map