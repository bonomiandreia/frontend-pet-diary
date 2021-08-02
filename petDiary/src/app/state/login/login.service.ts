import { Injectable } from '@angular/core';
import { LoginState, LoginStore } from './login.store';
import { LoginResponse } from '../../models/login-response.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Login } from '../../models/login.model';
import { Router } from '@angular/router';

/**
 * Login service
 *
 * @export
 * @class LoginService
 */
@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private loginStore: LoginStore, private http: HttpClient, private router: Router) { }

  setLogin(data: LoginState): void {
    this.router.navigate(['/posts']);
    this.loginStore.update(data);
  }

  deleteLogin(): void {
    this.loginStore.reset();
  }

  login(body: Login): void {
    this.http.post<LoginResponse>(`${environment.url}users/auth`, {...body, ignore_interceptor: true }).subscribe(
        (data: LoginResponse) => this.setLogin(data),
        error => console.log(error),
    );
    
  }

  logout(): void {
    this.deleteLogin();
  }
}
