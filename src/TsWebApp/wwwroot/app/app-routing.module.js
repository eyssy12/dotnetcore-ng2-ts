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
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var flex_layout_component_1 = require('./flexlayout/flex-layout.component');
var page_not_found_component_1 = require('./shared/page-not-found.component');
var routes = [
    { path: '', pathMatch: 'full', redirectTo: '404', },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'flex', component: flex_layout_component_1.FlexLayoutComponent },
    { path: '404', component: page_not_found_component_1.PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '404' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routableComponents = [
    home_component_1.HomeComponent,
    about_component_1.AboutComponent,
    flex_layout_component_1.FlexLayoutComponent,
    page_not_found_component_1.PageNotFoundComponent
];
//# sourceMappingURL=app-routing.module.js.map