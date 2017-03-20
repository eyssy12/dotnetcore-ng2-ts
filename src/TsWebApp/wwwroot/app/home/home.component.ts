import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { easeIn } from './../core/animations';

@Component({
    moduleId: module.id,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [ easeIn ]
})

export class HomeComponent
{
    selectedOption: string;

    folders = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        }
    ];
    notes = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        }
    ];

    constructor(public dialog: MdDialog) {
    }

    clicked(event)
    {
    }
}