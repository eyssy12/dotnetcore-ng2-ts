﻿import { Component } from '@angular/core';

import { AppRoutes } from './../app-routing.module';

@Component({
    moduleId: module.id,
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.min.css']
})

export class NavComponent
{
    private links: string[] = [];

    constructor()
    {
        AppRoutes
            .filter(value => value.isUserRoutable())
            .forEach((value) => {
                this.links.push(value.getPath());
            });
    }

    capitalizeLink(link: string)
    {
        return link.toUpperCase();
    }
}