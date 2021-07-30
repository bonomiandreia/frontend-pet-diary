import { Injectable } from '@angular/core';
import { Router,  CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginQuery } from '../state/login/login.query';
@Injectable()

export class AuthGuardService implements CanLoad {

  private readonly isLogged$: Observable<boolean>;

  constructor(public router: Router, public query: LoginQuery) {
    this.isLogged$ = this.query.isLogged$;
  }
  
  canLoad(): boolean {
    this.isLogged$.subscribe((data: boolean) => {
      if (!data) {
        return this.router.navigate(['/login']);
      }
    })
    return true;
  }
}