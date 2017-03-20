﻿import {
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

export const easeIn = trigger('easeIn', [
    transition('void => *', [
        style({
            opacity: 0
        }),
        animate('0.2s ease-in')
    ]),
    transition('* => void', [
        animate('0.2s 10 ease-out', style({
            opacity: 0
        }))
    ])
]);

export const flyInOut = trigger('flyInOut', [
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
]);