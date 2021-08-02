import { Component, Input, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';
import { Posts } from '../../models/posts.list.model';
import { PostsService } from '../../state/posts/posts.service';
import { LoginQuery } from '../../state/login/login.query';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  idUser: string

  constructor(private service: PostsService, private query: LoginQuery) {
    this.idUser = this.query.getValue().auth._id;
  }

  @Input() list: Posts[];

  delete(id: string): void {
    //testing
    this.service.deletePostsById(id, this.idUser)
  }

  ngOnInit(): void {}

}
