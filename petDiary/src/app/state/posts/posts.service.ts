import { Injectable } from '@angular/core';
import { PostsStore, PostsState } from './posts.store';
import { Posts } from '../../models/posts.list.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/**
 * Posts service
 *
 * @export
 * @class PostsService
 */
 @UntilDestroy()
@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private snackBar: MatSnackBar, private postsStore: PostsStore, private http: HttpClient) { }

  setPosts(data: Posts[]): void {
    this.postsStore.setPosts(data)
  }

  getPostsById(idUser: string): void {
    this.http.get<Posts[]>(`${environment.url}posts/${idUser}`)
    .pipe(untilDestroyed(this))
    .subscribe(
      (data: Posts[]) => { 
        this.setPosts(data)
      },
      (error) => { 
        this.snackBar.open(error.error)
      },
    );
  }

  postAddPost(content: string, idUser: string): void {
    const body = {
      text: content,
      date: Date.now(),
      idUser: idUser,
    }
    this.http.post<Posts[]>(`${environment.url}posts/create`, body)
    .pipe(untilDestroyed(this))
    .subscribe(
      (data: Posts[]) => { 
        this.setPosts(data)
        this.snackBar.open('Saved successfully!')
      },
      (error) => { 
        this.snackBar.open(error.error)
      },
    );
  }

  deletePostsById(idPost: string, idUser: string): void {
    const options = {
      body: {
        idUser: idUser,
      },
    };
    this.http.delete(`${environment.url}posts/delete/${idPost}`, options).subscribe(
      (data: Posts[]) => { 
        this.setPosts(data)
        this.snackBar.open('deleted successfully!')
      },
      (error) => { 
        this.snackBar.open(error.error)
      },
    );
  }
}
