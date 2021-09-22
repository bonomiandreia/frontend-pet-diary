import { LoginStore } from './login.store';

describe('ReferrerUrlStore', () => {
    let store: LoginStore;

    beforeEach(() => {
        store = new LoginStore();
    });


    it('should create an instance', () => {
        expect(store).toBeTruthy();
    });
});