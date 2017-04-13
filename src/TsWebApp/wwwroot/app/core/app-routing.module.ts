import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { AboutComponent } from './../about/about.component';
import { FlexLayoutComponent, } from './../flexlayout/flex-layout.component';
import { ChatConnectionResolver } from './../flexlayout/chat.resolver';
import { PageNotFoundComponent } from './../shared/page-not-found.component';

const Home = 'home',
    About = 'about',
    Flex = 'flex',
    NotFound = '404';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: NotFound, }, // path cannot start with a slash
    { path: Home, component: HomeComponent },
    { path: About, component: AboutComponent },
    { path: Flex, component: FlexLayoutComponent, resolve: { connection: ChatConnectionResolver } },
    { path: NotFound, component: PageNotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: NotFound },
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

export class AppRoute {

    private path: string;
    private friendlyName: string;
    private userRoutable: boolean;

    constructor(path: string, friendlyName: string, userRoutable: boolean = true) {
        this.path = path;
        this.friendlyName = friendlyName;
        this.userRoutable = userRoutable;
    }

    getPath() {
        return this.path;
    }

    getFriendlyName() {
        return this.friendlyName;
    }

    isUserRoutable() {
        return this.userRoutable;
    }
}

export const AppRoutes: AppRoute[] = [
    new AppRoute(Home, 'Home'),
    new AppRoute(About, 'About'),
    new AppRoute(Flex, 'Flex'),
    new AppRoute(NotFound, 'Not Found', false),
];