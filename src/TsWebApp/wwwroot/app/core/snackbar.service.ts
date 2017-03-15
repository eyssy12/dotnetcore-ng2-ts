import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService
{
    private defaultDuration = 2000;
    private defaultActionText = 'Dismiss';

    private snackBar;

    constructor(snackBar: MdSnackBar)
    {
        this.snackBar = snackBar;
    }

    openSnackBar(message: string, action: string = this.defaultActionText, duration: number = this.defaultDuration): void {
        this.snackBar.open(message, action, { duration: duration });
    }
}