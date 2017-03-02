import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent
{
    loading: boolean;

    constructor()
    {
    }

    ngOnInit()
    {
        this.loading = true;
    }

    ngAfterViewInit()
    {
        this.loading = false;
    }
}