import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Post } from "../model/post";
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly postsSubject = new BehaviorSubject<Post[]>([]);
  public readonly posts$ = this.postsSubject.asObservable();
  private readonly postUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly http: HttpClient) {}

  getPosts() {
    this.http.get<Post[]>(this.postUrl).subscribe({
      next: (data) => this.postsSubject.next(data),
      error: (err) => console.error(err),
    });
  }

  getPost(id: number) {
    return this.posts$.pipe(map((posts) => posts.find((f) => f.id === id)));
  }
}