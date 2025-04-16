import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class JwtService {
    private tokenKey = 'authToken'; // Storage key for JWT

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private router: Router,
    ) {}

    // 🔹 Save token in LocalStorage
    saveToken(tokenData: { token: string; tokenType: string }): void {
        localStorage.setItem(this.tokenKey, tokenData.token);
    }

    // 🔹 Retrieve the token
    getToken(): string | false | null {
        return localStorage.getItem(this.tokenKey);
    }

    // 🔹 Remove token (Logout)
    clearToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    // 🔹 Check if user is authenticated
    isAuthenticated(): boolean {
        if (isPlatformBrowser(this.platformId) && this.getToken()) {
            return true;
        }
        this.router.navigate(['']);
        return false;
    }
}
