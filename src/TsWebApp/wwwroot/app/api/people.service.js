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
    function Person(id, guid, firstName, lastName, date) {
        this.id = id;
        this.guid = guid;
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
        this.fullName = this.firstName + " " + this.lastName;
    }
    return Person;
}());
exports.Person = Person;
var PeopleService = (function () {
    function PeopleService(http) {
        this.http = http;
    }
    PeopleService.prototype.getPeople = function () {
        return this.http
            .get('app/api/people.json')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PeopleService.prototype.handleError = function (error) {
        console.error(error);
        var msg = "Error status code " + error.status + " at " + error.url;
        return Observable_1.Observable.throw(msg);
    };
    PeopleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PeopleService);
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map