import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Person
{
    constructor(
        public id: number,
        public guid: string,
        public firstName: string,
        public lastName: string,
        public date: Date)
    {
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

@Injectable()
export class PeopleService
{
    private http: Http;

    constructor(http: Http)
    {
        this.http = http;
    }

    getPeople()
    {
        return this.http
            .get('app/api/people.json')
            .map((response: Response) => <Person[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;

        return Observable.throw(msg);
    }
}