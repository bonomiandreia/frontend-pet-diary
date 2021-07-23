import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { PostsStore } from '../store/posts.store';
import { PostsState } from '../store/posts.model';

/**
 * Posts query
 *
 * @export
 * @class PostsQuery
 * @extends {Query<PostsState>}
 */
@Injectable({ providedIn: 'root' })
export class PostsQuery extends Query<PostsState> {

  constructor(protected store: PostsStore) {
    super(store);
  }
}
