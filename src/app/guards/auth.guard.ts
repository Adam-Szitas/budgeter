import { CanActivate, MaybeAsync, GuardResult } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate(): MaybeAsync<GuardResult> {
        return this.authService.isLoggedIn();
    }
}
