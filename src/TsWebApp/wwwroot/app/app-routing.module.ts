import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FlexLayoutComponent } from './flexlayout/flex-layout.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '404', }, // path cannot start with a slash
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'flex', component: FlexLayoutComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routableComponents = [
    HomeComponent,
    AboutComponent,
    FlexLayoutComponent,
    PageNotFoundComponent
];
