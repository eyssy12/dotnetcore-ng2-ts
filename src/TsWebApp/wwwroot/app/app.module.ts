import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';

//Should be last in load order
import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
    imports:
    [
        MaterialModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, NavComponent, FooterComponent, routableComponents],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent]
})

export class AppModule { }