import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Posts } from '../../models/posts.list.model';


export interface PostsState {
  data: Posts[];
}

/**
 * Create initial state
 */
export function createInitialState(): PostsState {
  return {
    data: [],
  }
}

/**
 * Posts store
 *
 * @export
 * @class PostsStore
 * @extends {Store<PostsState>}
 */
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts', resettable: true })
export class PostsStore extends Store<PostsState> {

  constructor() {
    super(createInitialState());
  }

  setPosts(data: Posts[]): void {
    this.update({ data });
  }
}
