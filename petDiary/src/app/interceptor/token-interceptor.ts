import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  switchMap } from 'rxjs/operators';
import { LoginQuery } from '../state/login/login.query';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token$: Observable<string>;

  constructor(public query: LoginQuery) {
    this.token$ = this.query.token$;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.token$.pipe(
      switchMap(token => {
          let headers = request.headers;
          headers = headers.set('auth', `${token}`);
          const requestCopy = request.clone({
              headers,
          });

          return next.handle(requestCopy);
      })
    );
  }
}