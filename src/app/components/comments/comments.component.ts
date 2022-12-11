import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/service/comment.service';
import { Comment } from '../../model/comment'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor(private readonly commentService: CommentService) {}

  comments$: Observable<Comment[] | undefined> | undefined;

  @Input() set postId(value: number) {
    this.comments$ = this.commentService.getCommentsForPost(value)
  }

  ngOnInit(): void {}
}
