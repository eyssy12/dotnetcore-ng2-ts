import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'flex-layout-demo',
    templateUrl: './flex-layout.component.html',
    styleUrls: [
        './flex-layout.component.css'
    ]
})

export class FlexLayoutComponent {
    calc2Cols = "2 2 calc(10em + 10px);";   /** 10px is the missing margin of the missing box */
    calc3Cols = "3 3 calc(15em + 20px)";    /** 20px is the missing margin of the two missing boxes */
}