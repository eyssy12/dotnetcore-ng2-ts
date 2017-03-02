import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule)
    .then(success => console.log('bootstrap load successful!'))
    .catch(error => console.log(error));