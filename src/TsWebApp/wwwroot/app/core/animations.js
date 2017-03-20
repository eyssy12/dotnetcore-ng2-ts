"use strict";
var core_1 = require('@angular/core');
exports.easeIn = core_1.trigger('easeIn', [
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0
        }),
        core_1.animate('0.2s ease-in')
    ]),
    core_1.transition('* => void', [
        core_1.animate('0.2s 10 ease-out', core_1.style({
            opacity: 0
        }))
    ])
]);
exports.flyInOut = core_1.trigger('flyInOut', [
    core_1.state('in', core_1.style({ opacity: 1, transform: 'translateX(0)' })),
    core_1.transition('void => *', [
        core_1.style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        core_1.animate('0.2s ease-in')
    ]),
    core_1.transition('* => void', [
        core_1.animate('0.2s 10 ease-out', core_1.style({
            opacity: 0,
            transform: 'translateX(100%)'
        }))
    ])
]);
//# sourceMappingURL=animations.js.map