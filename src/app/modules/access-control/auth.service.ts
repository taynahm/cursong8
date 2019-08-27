import { LoginModel } from './login.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_TOKEN_KEY = 'USER_TOKEN';

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  public login(data: LoginModel) {
    return this.http.post(`https://reqres.in/api/login`, data);
  }

  public register(data: LoginModel) {
    return this.http.post(`https://reqres.in/api/register`, data);
  }

  public logout() {
    localStorage.removeItem(this.USER_TOKEN_KEY);
  }

  public saveLogin(token: string) {
    localStorage.setItem(this.USER_TOKEN_KEY, token);
  }

  public getToken() {
    return localStorage.getItem(this.USER_TOKEN_KEY);
  }
}
