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
var app_routing_module_1 = require('./../app-routing.module');
var NavComponent = (function () {
    function NavComponent() {
        var _this = this;
        this.links = [];
        app_routing_module_1.AppRoutes
            .filter(function (value) { return value.isUserRoutable(); })
            .forEach(function (value) {
            _this.links.push(value.getPath());
        });
    }
    NavComponent.prototype.capitalizeLink = function (link) {
        return link.toUpperCase();
    };
    NavComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.min.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map