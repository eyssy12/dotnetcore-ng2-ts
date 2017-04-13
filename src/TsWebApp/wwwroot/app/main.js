"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var core_1 = require('@angular/core');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
core_1.enableProdMode();
platform.bootstrapModule(app_module_1.AppModule)
    .then(function (success) { return console.log('Bootstrap load successful!'); })
    .catch(function (error) { return console.log(error); });
//# sourceMappingURL=main.js.map