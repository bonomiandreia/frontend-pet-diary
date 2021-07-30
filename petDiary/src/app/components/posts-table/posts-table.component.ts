import { Component, Input, OnInit } from '@angular/core';
import { Posts } from '../../models/posts.list.model';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  constructor() {}

  @Input() list: any;

  ngOnInit(): void {
    console.log(this.list)
  }

}
