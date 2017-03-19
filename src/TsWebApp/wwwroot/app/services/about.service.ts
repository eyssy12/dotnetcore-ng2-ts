import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class Person
{
    public fullName: string;

    constructor(
        public id: number,
        public guid: string,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: Date)
    {
        this.fullName = this.firstName + " " + this.lastName;
    }
}

@Injectable()
export class AboutService
{
    private http: Http;
    private headers: Headers;
    private putRequestOptions: RequestOptions;

    constructor(http: Http)
    {
        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

        this.putRequestOptions = new RequestOptions({ headers: this.headers });
    }

    getPeople(): Observable<Person[]> {
        return this.http
            .get('/about/getpeople')
            .map((response: Response) => {
                return <Person[]>response.json()
            })
            .catch(this.handleError);
    }

    likeShiba(requester: number, resourceId: number): void {

        //let body = new FormData();
        //body.append('requester', requester);
        //body.append('resourceId', resourceId);
        //body.append('context', 'shiba');

        let body = JSON.stringify({ Requester: requester, ResourceId: resourceId, Context: 'shiba' });

        this.http
            .put('/about/likeshiba', body, this.putRequestOptions)
            .map((response: Response) => {
                console.log('Shiba put repsonse: ' + response.statusText)
            })
            .catch(this.handleError)
            .subscribe() // Observables are lazy and to enforce execution, we need to subscribe to it
    }

    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;

        return Observable.throw(msg);
    }
}