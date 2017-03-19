﻿import
{
    Component,
    OnDestroy,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

import { Observable } from 'rxjs/Observable';


import { Person, AboutService } from './../services/about.service';
import { SnackBarService } from './../core/snackbar.service'
import { AppRoutes } from './../core/app-routing.module';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.min.css'],
    providers: [
        AboutService,
        SnackBarService
    ],
    animations: [
        trigger('flyInOut', [
            state('in', style({ opacity: 1, transform: 'translateX(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate('0.2s 10 ease-out', style({
                    opacity: 0,
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})

export class AboutComponent implements OnInit, OnDestroy
{
    private aboutService: AboutService;
    private snackBarService: SnackBarService;
    private friendlyNameRoutes: string[] = [];

    people: Person[] = [];
    shibaCards: number = 1;
    shibaCardsArray: Array<any> = [1];

    constructor(personService: AboutService, snackBarService: SnackBarService)
    {
        this.aboutService = personService;
        this.snackBarService = snackBarService;
    }

    ngOnInit() {
        AppRoutes.forEach((value, index) => {
            this.friendlyNameRoutes.push(value.getFriendlyName());
        });

        this.getPeople();
    }

    ngOnDestroy() {
        this.emptyPeopleArray();
    }

    getPeople() {
        this.emptyPeopleArray();

        this.aboutService
            .getPeople()
            .subscribe(
                people => {
                    this.people = people;
                    this.snackBarService.openSnackBar(this.people.length + ' People received.');
                },
                error => console.log(error));
    }

    clearPeople() {
        this.emptyPeopleArray();
        this.snackBarService.openSnackBar('People cleared!');
    }

    getFriendlyNameRoutes(): string[] {
        return this.friendlyNameRoutes;
    }

    sliderChanged(event) {
        this.shibaCardsArray = new Array(this.shibaCards).fill(0);
    }

    likeShiba(id: number) {
        this.aboutService.likeShiba(1, id);
    }

    private emptyPeopleArray() {
        this.people = [];
    }
}