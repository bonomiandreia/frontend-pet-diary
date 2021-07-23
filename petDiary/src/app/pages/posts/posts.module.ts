
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostsComponent } from './posts.component';
import { PostsPageRoutingModule } from './posts-routing.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        PostsPageRoutingModule,
    ],
    declarations: [
      PostsComponent,
    ],
    exports: [PostsComponent],
})
export class LoginAccountModule {}
