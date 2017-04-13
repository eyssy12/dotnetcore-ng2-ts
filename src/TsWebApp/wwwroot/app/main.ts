import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

const platform = platformBrowserDynamic();

enableProdMode();
platform.bootstrapModule(AppModule)
    .then(success => console.log('Bootstrap load successful!'))
    .catch(error => console.log(error));