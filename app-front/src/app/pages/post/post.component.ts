import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: PostInterface | null = null;
  loading: boolean = false;
  constructor(
    private blogService: BlogService,
    private router: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    const slug = this.router.snapshot.paramMap.get('slug');
    if (slug) {
      this.toggleLoading();
      this.blogService
        .getPost(slug)
        .pipe(finalize(() => this.toggleLoading()))
        .subscribe((res) => (this.post = res.data));
    }
  }

  toggleLoading(): void {
    this.loading = !this.loading;
    if (this.loading) {
      this.loadingService.start();
    } else {
      this.loadingService.stop();
    }
  }
}
