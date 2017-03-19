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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var Person = (function () {
    function Person(id, guid, firstName, lastName, dateOfBirth) {
        this.id = id;
        this.guid = guid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return Person;
}());
exports.Person = Person;
var AboutService = (function () {
    function AboutService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.putRequestOptions = new http_1.RequestOptions({ headers: this.headers });
    }
    AboutService.prototype.getPeople = function () {
        return this.http
            .get('/about/getpeople')
            .map(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    AboutService.prototype.likeShiba = function (requester, resourceId) {
        //let body = new FormData();
        //body.append('requester', requester);
        //body.append('resourceId', resourceId);
        //body.append('context', 'shiba');
        var body = JSON.stringify({ Requester: requester, ResourceId: resourceId, Context: 'shiba' });
        this.http
            .put('/about/likeshiba', body, this.putRequestOptions)
            .map(function (response) {
            console.log('Shiba put repsonse: ' + response.statusText);
        })
            .catch(this.handleError)
            .subscribe(); // Observables are lazy and to enforce execution, we need to subscribe to it
    };
    AboutService.prototype.handleError = function (error) {
        console.error(error);
        var msg = "Error status code " + error.status + " at " + error.url;
        return Observable_1.Observable.throw(msg);
    };
    AboutService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AboutService);
    return AboutService;
}());
exports.AboutService = AboutService;
//# sourceMappingURL=about.service.js.map