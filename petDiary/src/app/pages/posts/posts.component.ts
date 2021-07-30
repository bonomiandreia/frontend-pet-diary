import { Component, OnInit } from '@angular/core';
import { LoginQuery } from '../../state/login/login.query';
import { PostsService } from '../../state/posts/posts.service';
import { PostsQuery } from '../../state/posts/posts.query';
import { Observable } from 'rxjs';
import { Posts } from '../../models/posts.list.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  id: string;
  posts$: Observable<Posts[]>

  constructor(private queryLogin: LoginQuery, private service: PostsService, private queryPosts: PostsQuery) { 
    this.id = this.queryLogin.getValue().auth._id;
    this.posts$ = this.queryPosts.posts$;
  }

  ngOnInit(): void {
    this.service.getPostsById(this.id);
  }

}
