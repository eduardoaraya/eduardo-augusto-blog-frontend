import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  list: PostInterface[] = [];
  routerSubscription: Subscription | null = null;

  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute
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

  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getList() {
    return this.blogService.listPublishedPost();
  }

  getListByCategory(categoryId: number) {
    return this.blogService.listPublishedPostByCategory(categoryId);
  }
}
