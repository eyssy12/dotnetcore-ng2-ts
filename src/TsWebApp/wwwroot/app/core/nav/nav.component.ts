import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent
{
    links: string[]

    constructor()
    {
        this.links = ['home', 'about', 'three', 'four']; // TODO: get links from a RouterService component/module
    }

    capitalizeLink(link: string)
    {
        return link.toUpperCase();
    }
}