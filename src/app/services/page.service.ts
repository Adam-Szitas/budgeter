import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PageService {
    constructor(private router: Router) {}

    public redirectTo(url: string): void {
        this.router.navigateByUrl(url);
    }
}
