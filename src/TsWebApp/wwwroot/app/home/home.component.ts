import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent
{
    clicked(event)
    {
        window.alert('Clicked!');
    }
}