import { Component, ViewEncapsulation, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resolve } from '@angular/router';
import { SignalR, SignalRConnection } from 'ng2-signalr';

@Component({
    moduleId: module.id,
    selector: 'flex-layout-demo',
    templateUrl: './flex-layout.component.html',
    styleUrls: [
        './flex-layout.component.min.css'
    ]
})

export class FlexLayoutComponent {
    private connection: SignalRConnection;

    constructor(route: ActivatedRoute) {
        this.connection = route.snapshot.data['connection'];
    }
}