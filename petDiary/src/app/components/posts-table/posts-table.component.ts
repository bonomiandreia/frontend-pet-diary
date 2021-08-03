import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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

  idUser: string;
  @Output() deleteEmployee = new EventEmitter<string>();

  constructor(private service: PostsService, private query: LoginQuery) {
    this.idUser = this.query.getValue().auth._id;
  }

  @Input() list: Posts[];

  delete(id: string): void {
    //testing, output after father component
    this.deleteEmployee.emit(id)
    //this.service.deletePostsById(id, this.idUser)
  }

  ngOnInit(): void {}

}
