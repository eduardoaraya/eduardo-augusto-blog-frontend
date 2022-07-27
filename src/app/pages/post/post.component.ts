import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: PostInterface | null = null;

  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const slug = this.router.snapshot.paramMap.get('slug');
    if (slug) {
      this.blogService.getPost(slug).subscribe((res) => (this.post = res.data));
    }
  }
}
