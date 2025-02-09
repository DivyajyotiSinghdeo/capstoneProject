import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private isLoggedIn: boolean = false;
 
  constructor() { }
 
  saveToken(token: string) {
    this.token = token;
    this.isLoggedIn = true;
  }
 
  SetRole(role: any) {
    localStorage.setItem('role', role);
  }
 
  get getRole(): string | null {
    return localStorage.getItem('role');
  }
 
  get getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
 
  getToken(): string | null {
    return this.token;
  }
 
  logout() {
    this.token = null;
    this.isLoggedIn = false;
    localStorage.removeItem('role');
  }
}
