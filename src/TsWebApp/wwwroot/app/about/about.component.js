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
var about_service_1 = require('./../services/about.service');
var snackbar_service_1 = require('./../core/snackbar.service');
var app_routing_module_1 = require('./../core/app-routing.module');
var animations_1 = require('./../core/animations');
var AboutComponent = (function () {
    function AboutComponent(personService, snackBarService) {
        this.friendlyNameRoutes = [];
        this.people = [];
        this.shibaCards = 1;
        this.shibaCardsArray = [1];
        this.aboutService = personService;
        this.snackBarService = snackBarService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        app_routing_module_1.AppRoutes.forEach(function (value, index) {
            _this.friendlyNameRoutes.push(value.getFriendlyName());
        });
        this.getPeople();
    };
    AboutComponent.prototype.ngOnDestroy = function () {
        this.emptyPeopleArray();
    };
    AboutComponent.prototype.getPeople = function () {
        var _this = this;
        this.emptyPeopleArray();
        this.aboutService
            .getPeople()
            .subscribe(function (people) {
            _this.people = people;
            _this.snackBarService.openSnackBar(_this.people.length + ' People received.');
        }, function (error) { return console.log(error); });
    };
    AboutComponent.prototype.clearPeople = function () {
        this.emptyPeopleArray();
        this.snackBarService.openSnackBar('People cleared!');
    };
    AboutComponent.prototype.getFriendlyNameRoutes = function () {
        return this.friendlyNameRoutes;
    };
    AboutComponent.prototype.sliderChanged = function (event) {
        this.shibaCardsArray = new Array(this.shibaCards).fill(0);
    };
    AboutComponent.prototype.likeShiba = function (id) {
        this.aboutService.likeShiba(1, id);
    };
    AboutComponent.prototype.emptyPeopleArray = function () {
        this.people = [];
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.min.css'],
            providers: [
                about_service_1.AboutService,
                snackbar_service_1.SnackBarService
            ],
            animations: [animations_1.easeIn, animations_1.flyInOut]
        }), 
        __metadata('design:paramtypes', [about_service_1.AboutService, snackbar_service_1.SnackBarService])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map