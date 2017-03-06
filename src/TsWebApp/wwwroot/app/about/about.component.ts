import { Component } from '@angular/core';

import { AppRoutes } from './../core/app-routing.module';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.min.css']
})

export class AboutComponent
{
    private friendlyNameRoutes: string[] = [];

    constructor()
    {
        AppRoutes.forEach((value, index) => {
            this.friendlyNameRoutes.push(value.getFriendlyName());
        });
    }

    getFriendlyNameRoutes(): string[]
    {
        return this.friendlyNameRoutes;
    }
}