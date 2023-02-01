import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize, Subscription, tap } from 'rxjs';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  list: PostInterface[] = [];
  routerSubscription: Subscription | null = null;
  loading: boolean = false;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.paramMap.subscribe(
      (params) => {
        const categoryId = +(params.get('categoryId') ?? 0);
        const serviceListing =
          categoryId && categoryId !== 0
            ? this.getListByCategory(categoryId)
            : this.getList();

        serviceListing.subscribe((res) => (this.list = res.data));
      }
    );
  }

  toggleLoading(): void {
    this.loading = !this.loading;
    if (this.loading) {
      this.loadingService.start();
    } else {
      this.loadingService.stop();
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getList() {
    this.toggleLoading();
    return this.blogService
      .listPublishedPost()
      .pipe(finalize(() => this.toggleLoading()));
  }

  getListByCategory(categoryId: number) {
    this.toggleLoading();
    return this.blogService
      .listPublishedPostByCategory(categoryId)
      .pipe(finalize(() => this.toggleLoading()));
  }
}
