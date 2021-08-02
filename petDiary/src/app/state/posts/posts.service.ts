import { Injectable } from '@angular/core';
import { PostsStore, PostsState } from './posts.store';
import { Posts } from '../../models/posts.list.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        this.snackBar.open(error.error, '', {
          duration: 2000,
          panelClass: ['snack-bar-style']
        })
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
        this.snackBar.open('Saved successfully!', '', {
          duration: 2000,
          panelClass: ['snack-bar-style']
        })
      },
      (error) => { 
        this.snackBar.open(error.error, '', {
          duration: 2000,
          panelClass: ['snack-bar-style']
        })
      },
    );
  }
}
