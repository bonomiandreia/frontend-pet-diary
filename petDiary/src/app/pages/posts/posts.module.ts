
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
import { ModalPostComponent } from '../../components/modal-post/modal-post.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PipeModulePipe } from '../../pipes/pipe-module.pipe';

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
      MatCardModule,
      MatDialogModule,
    ],
    declarations: [
      PostsComponent,
      HeaderComponent,
      PostsTableComponent,
      ModalPostComponent,
      PipeModulePipe
    ],
    exports: [PostsComponent],
    providers: [
      PipeModulePipe,
    ]
})
export class LoginAccountModule {}
