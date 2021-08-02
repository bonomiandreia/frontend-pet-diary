import { Injectable } from '@angular/core';
import { PostsStore, PostsState } from './posts.store';
import { Posts } from '../../models/posts.list.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

/**
 * Posts service
 *
 * @export
 * @class PostsService
 */
 @UntilDestroy()
@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private postsStore: PostsStore, private http: HttpClient) { }

  setPosts(data: Posts[]): void {
    this.postsStore.setPosts(data)
  }

  getPostsById(idUser: string) {
    this.http.get<Posts[]>(`${environment.url}posts/${idUser}`).subscribe((data: Posts[]) => {
     this.setPosts(data);
    }) 
  }

  postAddPost(content: string, idUser: string) {
    const body = {
      text: content,
      date: Date.now(),
      idUser: idUser,
    }
    this.http.post<Posts[]>(`${environment.url}posts/create`, body).pipe(untilDestroyed(this)).subscribe((data: Posts[]) => {
      this.setPosts(data);
    })
  }
}
