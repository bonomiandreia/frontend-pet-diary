import { Injectable } from '@angular/core';
import { Query, StoreConfig } from '@datorama/akita';
import { Observable } from 'rxjs';
import { LoginState, LoginStore } from './login.store';

/**
 * Login query
 *
 * @export
 * @class LoginQuery
 * @extends {Query<LoginState>}
 */
@Injectable({ providedIn: 'root' })
export class LoginQuery extends Query<LoginState> {

  readonly isLogged$: Observable<boolean>;
  readonly token$: Observable<string>;
  readonly idUser$: Observable<string>;
  readonly email$: Observable<string>;

  constructor(protected store: LoginStore) {
    super(store);

    this.isLogged$ = this.select(state => !!state.token);
    this.token$ = this.select(state => state.token);
    this.idUser$ = this.select(state => state.auth._id);
    this.email$ = this.select(state => state.auth.email);
  }
}
