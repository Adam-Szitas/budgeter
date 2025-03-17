import { Inject } from '@angular/core';
import { Router } from '@angular/router';

@Inject({ providedIn: 'root' })
export class PageService {
    constructor(private router: Router) {}

    public redirectTo(url: string): void {
        this.router.navigateByUrl(url);
    }
}
