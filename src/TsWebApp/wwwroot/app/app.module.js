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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('@angular/material');
var flex_layout_1 = require("@angular/flex-layout");
var ng2_signalr_1 = require('ng2-signalr');
var ng2_signalr_2 = require('ng2-signalr');
var app_component_1 = require('./app.component');
var nav_component_1 = require('./core/nav/nav.component');
var footer_component_1 = require('./core/footer/footer.component');
//Should be last in load order
var app_routing_module_1 = require('./core/app-routing.module');
// v2.0.0
function createConfig() {
    var config = new ng2_signalr_2.SignalRConfiguration();
    config.hubName = 'ChatHub';
    config.qs = { user: 'rob' };
    config.url = 'http://localhost:55194/signalr';
    config.logging = true;
    return config;
}
exports.createConfig = createConfig;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MaterialModule.forRoot(),
                flex_layout_1.FlexLayoutModule.forRoot(),
                ng2_signalr_1.SignalRModule.forRoot(createConfig),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [app_component_1.AppComponent, nav_component_1.NavComponent, footer_component_1.FooterComponent, app_routing_module_1.routableComponents],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map