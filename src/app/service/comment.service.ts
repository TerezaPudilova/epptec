import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import {Comment} from '../model/comment'
@Injectable({providedIn: 'root'})
export class CommentService {
private readonly commentsSubject = new BehaviorSubject<Comment[]>([]);
public readonly comments$ = this.commentsSubject.asObservable();
private readonly commentUrl = 'https://jsonplaceholder.typicode.com/comments';

constructor(private readonly http: HttpClient) {}

getComments() {
    this.http.get<Comment[]>(this.commentUrl).subscribe({
        next: (data) => this.commentsSubject.next(data),
        error: (err) => console.error(err)
    })
}

getCommentsForPost(postId: number) {
    return this.comments$.pipe(map((comments) => comments.filter((comment) => comment.postId === postId)))
}

getCommentForPostCount(postId: number) {
    return this.getCommentsForPost(postId).pipe(map((comments) => comments.length))
}
}