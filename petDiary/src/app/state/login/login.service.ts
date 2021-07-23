import { Injectable } from '@angular/core';
import { LoginStore } from '../store/login.store';

/**
 * Login service
 *
 * @export
 * @class LoginService
 */
@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(private loginStore: LoginStore) { }
}
