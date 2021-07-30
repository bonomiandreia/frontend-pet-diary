
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PostsComponent } from './posts.component';
import { HeaderComponent } from '../../components/header/header.component';
import { PostsPageRoutingModule } from './posts-routing.module';
import { MatIconModule } from '@angular/material/icon'
import { PostsTableComponent } from '../../components/posts-table/posts-table.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatCardModule,
        MatGridListModule,
        ReactiveFormsModule,
        PostsPageRoutingModule,
        MatIconModule,
        NgxEditorModule,
    ],
    declarations: [
      PostsComponent,
      HeaderComponent,
      PostsTableComponent,
    ],
    exports: [PostsComponent,
      MatIconModule],
})
export class LoginAccountModule {}
