import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, switchMap } from 'rxjs/operators';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(
    private readonly postService: PostService,
    private readonly route: ActivatedRoute
  ) {}

  post$ = this.route.params.pipe(
    map((param) => Number(param['id'])),
    filter((id) => !!id),
    switchMap((id) => this.postService.getPost(id))
  )


  ngOnInit(): void {

  }

}
