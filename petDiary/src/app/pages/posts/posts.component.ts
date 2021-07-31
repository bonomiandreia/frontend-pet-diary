import { Component, OnInit } from '@angular/core';
import { LoginQuery } from '../../state/login/login.query';
import { PostsService } from '../../state/posts/posts.service';
import { PostsQuery } from '../../state/posts/posts.query';
import { Observable } from 'rxjs';
import { Posts } from '../../models/posts.list.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalPostComponent } from '../../components/modal-post/modal-post.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  id: string;
  posts$: Observable<Posts[]>
  dialogRef: MatDialogRef<any>;
  text!: string;


  constructor(public dialog: MatDialog, private queryLogin: LoginQuery, private service: PostsService, private queryPosts: PostsQuery) { 
    this.id = this.queryLogin.getValue().auth._id;
    this.posts$ = this.queryPosts.posts$;
  }

  ngOnInit(): void {
    this.service.getPostsById(this.id);
  }

  openDialogPosts(): void {
    const dialogRef = this.dialog.open(ModalPostComponent, {
      height: '40%',
        width: '60%'
    });

    console.log('here')

    dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }
}
