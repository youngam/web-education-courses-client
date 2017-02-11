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
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var md5_1 = require("ts-md5/dist/md5");
var root_request_1 = require("../entity/root-request");
var api_method_1 = require("../entity/api-method");
/**
 * Created by alex on 2/7/17.
 */
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.url = 'http://localhost:8080/getUser';
    }
    AuthService.prototype.signUpUser = function (name, password) {
        var request = this.getUserRequestBody(name, password);
        var rootRequest = new root_request_1.RootRequest(api_method_1.ApiMethods.SIGN_UP, request);
        console.log("REQUEST: " + JSON.stringify(rootRequest));
        return this.http.post(this.url, rootRequest, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.signInUser = function (name, password) {
        var request = this.getUserRequestBody(name, password);
        var rootRequest = new root_request_1.RootRequest(api_method_1.ApiMethods.SIGN_IN, request);
        console.log("REQUEST: " + JSON.stringify(rootRequest));
        return this.http.post(this.url, rootRequest, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.getUserRequestBody = function (name, password) {
        return {
            name: name,
            password: md5_1.Md5.hashStr(password)
        };
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map