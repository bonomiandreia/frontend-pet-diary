import { LoginQuery } from './login.query';
import { LoginStore } from './login.store';

describe('AccountsQuery', () => {
    let query: LoginQuery;

    beforeEach(() => {
        query = new LoginQuery(new LoginStore());
    });

    it('should create an instance', () => {
        expect(query).toBeTruthy();
    });
});