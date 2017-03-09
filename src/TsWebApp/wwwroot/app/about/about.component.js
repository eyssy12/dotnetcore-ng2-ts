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
var people_service_1 = require('./../api/people.service');
var app_routing_module_1 = require('./../core/app-routing.module');
var AboutComponent = (function () {
    function AboutComponent(personService) {
        this.friendlyNameRoutes = [];
        this.people = [];
        this.personService = personService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        app_routing_module_1.AppRoutes.forEach(function (value, index) {
            _this.friendlyNameRoutes.push(value.getFriendlyName());
        });
        this.getPeople();
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        this.people = [];
    };
    AboutComponent.prototype.getPeople = function () {
        var _this = this;
        this.people = [];
        this.personService
            .getPeople()
            .subscribe(function (people) {
            _this.people = people;
        }, function (error) { return console.log(error); });
    };
    AboutComponent.prototype.clearPeople = function () {
        this.people = [];
    };
    AboutComponent.prototype.getFriendlyNameRoutes = function () {
        return this.friendlyNameRoutes;
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.min.css'],
            providers: [people_service_1.PeopleService]
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map