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
var FlexLayoutComponent = (function () {
    function FlexLayoutComponent() {
        this.calc2Cols = "2 2 calc(10em + 10px);"; /** 10px is the missing margin of the missing box */
        this.calc3Cols = "3 3 calc(15em + 20px)"; /** 20px is the missing margin of the two missing boxes */
    }
    FlexLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'flex-layout-demo',
            templateUrl: './flex-layout.component.html',
            styleUrls: [
                './flex-layout.component.min.css'
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], FlexLayoutComponent);
    return FlexLayoutComponent;
}());
exports.FlexLayoutComponent = FlexLayoutComponent;
//# sourceMappingURL=flex-layout.component.js.map