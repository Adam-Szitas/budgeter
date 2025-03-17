import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { JwtService } from './jwt.service';

import { Environment } from '../environment/environment';
import { Credentials } from '../skeleton/pages/register/register.component';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);
    private jwtService = inject(JwtService);
    private apiUrl = Environment.core;

    public login(credentials: Credentials) {
        const body = JSON.stringify({ name: credentials.name, password: credentials.password });

        return this.http.post<LoginResponse>(`${this.apiUrl}auth/login`, body).pipe(
            tap((response) => {
                if (response.token) {
                    this.jwtService.saveToken(response);
                }
            }),
        );
    }

    public register(credentials: Credentials) {
        const body = JSON.stringify({
            name: credentials.name,
            email: credentials.mail,
            password: credentials.password,
        });
        return this.http.post<LoginResponse>(`${this.apiUrl}auth/register`, body).pipe(
            tap((response) => {
                if (response?.token) {
                    this.jwtService.saveToken(response);
                }
            }),
        );
    }

    public logout(): Observable<boolean> {
        this.jwtService.clearToken();
        return of(true);
    }

    public isLoggedIn(): boolean {
        return this.jwtService.isAuthenticated();
    }
}

interface LoginResponse {
    token: string;
    tokenType: string;
}
