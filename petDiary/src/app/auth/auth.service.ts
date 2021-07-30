import { Injectable } from '@angular/core';
import { Router,  CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginQuery } from '../state/login/login.query';
import { resetStores } from '@datorama/akita';
@Injectable()

export class AuthGuardService implements CanLoad {

  private readonly isLogged: string;

  constructor(public router: Router, public query: LoginQuery) {
    this.isLogged = this.query.getValue().token;
  }
  
  canLoad(): boolean {
    if (this.isLogged == '') {
      return false;
    }

    return true;
  }
}