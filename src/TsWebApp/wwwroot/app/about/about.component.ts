import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { Person, PeopleService } from './../api/people.service';
import { AppRoutes } from './../core/app-routing.module';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.min.css'],
    providers: [PeopleService]
})

export class AboutComponent implements OnInit, OnDestroy
{
    private personService: PeopleService;
    private friendlyNameRoutes: string[] = [];

    people: Person[] = [];

    constructor(personService: PeopleService)
    {
        this.personService = personService;
    }

    ngOnInit() {
        AppRoutes.forEach((value, index) => {
            this.friendlyNameRoutes.push(value.getFriendlyName());
        });

        this.getPeople();
    }

    ngOnDestroy() {
        this.people = [];
    }

    getPeople() {
        this.people = [];

        this.personService
            .getPeople()
            .subscribe(
            people => {
                this.people = people;
            },
            error => console.log(error));
    }

    clearPeople() {
        this.people = [];
    }

    getFriendlyNameRoutes(): string[] {
        return this.friendlyNameRoutes;
    }
}