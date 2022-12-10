import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostsComponent,
    PostDetailComponent
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
