import { Component, OnInit } from '@angular/core';
import { LoginQuery } from '../../state/login/login.query';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  id: string;

  constructor(private query: LoginQuery) { 
    this.id = this.query.getValue().auth._id;
  }

  ngOnInit(): void {}

}
