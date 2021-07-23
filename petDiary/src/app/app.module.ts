import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './pages/posts/posts.module';
import { LoginModule } from './pages/login/login.module';
import { CreateAccountModule } from './pages/create-account/create-account.module';
import { HeaderComponent } from './components/header/header.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { ModalPostComponent } from './components/modal-post/modal-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsTableComponent,
    ModalPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostsModule,
    LoginModule,
    CreateAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
