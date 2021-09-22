import { PostsStore } from './posts.store';

describe('PostsStore', () => {
    let store: PostsStore;

    beforeEach(() => {
        store = new PostsStore();
    });


    it('should create an instance', () => {
        expect(store).toBeTruthy();
    });
});