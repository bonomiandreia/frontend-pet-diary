import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';

export const ROUTES: Routes = [
  { path: '', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],

exports: [RouterModule],
})
export class PostsPageRoutingModule { }