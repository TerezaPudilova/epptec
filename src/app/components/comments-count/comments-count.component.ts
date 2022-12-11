import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from 'src/app/service/comment.service';


@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.css']
})
export class CommentCountComponent implements OnInit {

  constructor(
    private readonly commentService: CommentService
  ) {}

  commentCount$: Observable<number | undefined> | undefined

  @Input() set commentId(value: number) {
    this.commentCount$ = this.commentService.getCommentForPostCount(value)
  }



  ngOnInit(): void {
  }

}
