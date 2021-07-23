import { Injectable } from '@angular/core';
import { PostsStore } from '../store/posts.store';

/**
 * Posts service
 *
 * @export
 * @class PostsService
 */
@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private postsStore: PostsStore) { }
}
