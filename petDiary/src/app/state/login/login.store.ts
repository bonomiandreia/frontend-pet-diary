import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
export interface LoginState {
  auth: {
    _id: string;
    email: string;
  }
  token: string

}
/**
 * Create initial state
 */
export function createInitialState(): LoginState {
  return { 
    auth: {
      _id: '',
    email: '',
    },
    token: '',
  };
}

/**
 * Login store
 *
 * @export
 * @class LoginStore
 * @extends {Store<LoginState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'login', resettable: true })
export class LoginStore extends Store<LoginState> {

  constructor() {
    super(createInitialState());
  }
}
