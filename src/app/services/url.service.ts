import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environment/environment';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class UrlService {
    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) {}

    public getDocument() {
        return this.http.get(`${Environment.core}api/firestore/get/${Environment.token}?collection=budgeter`);
    }
}
