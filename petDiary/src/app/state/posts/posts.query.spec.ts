import { PostsQuery } from './posts.query';
import { PostsStore } from './posts.store';

describe('PostsQuery', () => {
    let query: PostsQuery;

    beforeEach(() => {
        query = new PostsQuery(new PostsStore());
    });

    it('should create an instance', () => {
        expect(query).toBeTruthy();
    });
});