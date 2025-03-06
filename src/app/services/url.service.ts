import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environment/environment';

@Injectable({ providedIn: 'root' })
export class UrlService {
    constructor(private http: HttpClient) {}

    public getDocument() {
        return this.http.get(`${Environment.core}user/get`);
    }
}
