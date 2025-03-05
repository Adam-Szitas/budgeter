import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private tokenKey = 'authToken'; // Storage key for JWT

  // 🔹 Save token in LocalStorage
  saveToken(tokenData: { token: string, tokenType: string }): void {
    localStorage.setItem(this.tokenKey, tokenData.token);
  }

  // 🔹 Retrieve the token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // 🔹 Remove token (Logout)
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // 🔹 Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
