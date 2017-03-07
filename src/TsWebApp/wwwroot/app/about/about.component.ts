import { Component } from '@angular/core';

import { Person, PeopleService } from './../api/people.service';
import { AppRoutes } from './../core/app-routing.module';

@Component({
    moduleId: module.id,
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.min.css'],
    providers: [PeopleService]
})

export class AboutComponent
{
    private people = [];
    private friendlyNameRoutes: string[] = [];
    private personService: PeopleService;

    constructor(personService: PeopleService)
    {
        AppRoutes.forEach((value, index) => {
            this.friendlyNameRoutes.push(value.getFriendlyName());
        });

        this.personService = personService;
    }

    ngOnInit()
    {
        this.people = [];
        this.fetchPeople();
    }

    fetchPeople()
    {
        this.personService
            .getPeople()
            .subscribe(
                people => {
                    this.people.push(people);
                },
                error => console.error(<any>error));
    }

    getPeople()
    {
        return this.people;
    }

    clearPeople()
    {
        this.people = [];
    }

    hasPeople()
    {
        return this.people.length > 0;
    }

    getFriendlyNameRoutes(): string[]
    {
        return this.friendlyNameRoutes;
    }
}