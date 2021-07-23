import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { PostsState } from '../store/posts.model';

/**
 * Create initial state
 */
export function createInitialState(): PostsState {
  return { };
}

/**
 * Posts store
 *
 * @export
 * @class PostsStore
 * @extends {Store<PostsState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts' })
export class PostsStore extends Store<PostsState> {

  constructor() {
    super(createInitialState());
  }
}
