import { Component, OnInit } from '@angular/core';
import { AuthorService } from './service/author.service';
import { CommentService } from './service/comment.service';
import { PostService } from './service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'epptec';

  constructor(
    private postService: PostService,
    private commentsService: CommentService,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    this.postService.getPosts()
    this.commentsService.getComments()
    this.authorService.getAuthors()
  }
}
