import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit {

  items: any;

  constructor() { 
    this.items = [{id:'String Elemento'}, {id:'String Elemento'}]
  }

  ngOnInit(): void {
  }

}
