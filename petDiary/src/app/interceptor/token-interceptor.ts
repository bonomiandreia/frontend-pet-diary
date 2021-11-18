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
  token: string

  constructor(public query: LoginQuery) {
    this.token$ = this.query.token$;
    this.token = this.query.getValue().token;
  }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const ignoreInterceptor = request?.body?.ignore_interceptor ? request?.body?.ignore_interceptor : false;
        
        if ((request?.body && ignoreInterceptor) || request?.url.includes('.svg')) {
            return next.handle(request);
        }

        const tokenizedReq = request.clone({
            setHeaders: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            auth: this.query.getValue().token
            }
        });
    
        return next.handle(tokenizedReq);
    }
}