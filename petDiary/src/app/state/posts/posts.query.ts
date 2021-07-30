import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { PostsStore, PostsState } from './posts.store';
import { Posts } from '../../models/posts.list.model';


/**
 * Posts query
 *
 * @export
 * @class PostsQuery
 * @extends {Query<PostsState>}
 */
@Injectable({ providedIn: 'root' })
export class PostsQuery extends Query<PostsState> {

  readonly posts$: Observable<Posts[]>;

  constructor(protected store: PostsStore) {
    super(store);
    this.posts$ = this.select(state => state.data);
  }
}
