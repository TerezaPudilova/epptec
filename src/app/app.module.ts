import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { CommentCountComponent } from './components/comments-count/comments-count.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SlicePipe } from './pipes/slice.pipe'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostsComponent,
    PostDetailComponent,
    PostComponent,
    AuthorComponent,
    CommentCountComponent,
    CommentsComponent,
    SlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
