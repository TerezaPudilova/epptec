import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Author } from '../model/author';

@Injectable({ providedIn: 'root' })
export class AuthorService {
  private readonly authorsSubject = new BehaviorSubject<Author[]>([]);
  private readonly authors$ = this.authorsSubject.asObservable();
  private readonly authorUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private readonly http: HttpClient) {}

  getAuthors() {
    this.http.get<Author[]>(this.authorUrl).subscribe({
      next: (data) => this.authorsSubject.next(data),
      error: (err) => console.error(err),
    });
  }

  getAuthor(id: number) {
    return this.authors$.pipe(
      map((authors) => authors.find((author) => author.id === id))
    );
  }
}
