import { LayoutQuery } from './layout.query';
import { LayoutStore } from './layout.store';

describe('AccountsQuery', () => {
    let query: LayoutQuery;

    beforeEach(() => {
        query = new LayoutQuery(new LayoutStore());
    });

    it('should create an instance', () => {
        expect(query).toBeTruthy();
    });
});