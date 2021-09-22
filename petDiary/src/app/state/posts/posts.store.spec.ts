import { PostsStore } from './posts.store';

describe('ReferrerUrlStore', () => {
    let store: PostsStore;

    beforeEach(() => {
        store = new PostsStore();
    });


    it('should create an instance', () => {
        expect(store).toBeTruthy();
    });
});