import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { LoginState } from '../store/login.model';

/**
 * Create initial state
 */
export function createInitialState(): LoginState {
  return { };
}

/**
 * Login store
 *
 * @export
 * @class LoginStore
 * @extends {Store<LoginState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login' })
export class LoginStore extends Store<LoginState> {

  constructor() {
    super(createInitialState());
  }
}
