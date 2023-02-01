import { Component, Input, OnInit } from '@angular/core';
import { PostInterface } from 'src/app/http/interfaces/post.interface';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  @Input()
  post: PostInterface | null = null;

  constructor() {}

  ngOnInit(): void {}
}
