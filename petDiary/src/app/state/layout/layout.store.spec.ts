
import { LayoutStore } from './layout.store';

describe('ReferrerUrlStore', () => {
    let store: LayoutStore;

    beforeEach(() => {
        store = new LayoutStore();
    });


    it('should create an instance', () => {
        expect(store).toBeTruthy();
    });
});
