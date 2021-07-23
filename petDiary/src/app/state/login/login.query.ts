import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { LoginStore } from '../store/login.store';
import { LoginState } from '../store/login.model';

/**
 * Login query
 *
 * @export
 * @class LoginQuery
 * @extends {Query<LoginState>}
 */
@Injectable({ providedIn: 'root' })
export class LoginQuery extends Query<LoginState> {

  constructor(protected store: LoginStore) {
    super(store);
  }
}
