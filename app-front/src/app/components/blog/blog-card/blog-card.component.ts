import { Component, Input, OnInit } from '@angular/core';
import { PostInterface } from 'src/app/http/interfaces/post.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input()
  post: PostInterface | null = null;

  constructor() {}

  ngOnInit(): void {}
}
