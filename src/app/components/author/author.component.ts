import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(
    private readonly authorService: AuthorService
  ) {}

  author$: Observable<Author | undefined> | undefined

  @Input() set userId(value: number) {
    this.author$ = this.authorService.getAuthor(value)
    console.log(this.authorService.getAuthor(value))
  }

  ngOnInit(): void {
  }

}
