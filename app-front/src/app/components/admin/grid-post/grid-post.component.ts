import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';
import { LoadingService } from 'src/app/services/loading.service';
import { GridModel } from '../../../shared/grid/grid-model';

@Component({
  selector: 'app-grid-post',
  templateUrl: './grid-post.component.html',
  styleUrls: ['./grid-post.component.scss'],
})
export class GridPostComponent implements OnInit {
  postsGrid = new GridModel<PostInterface>({
    actions: [
      {
        click: (event, item) => {
          event.preventDefault();
          this.router.navigate([`admin/posts/edit/${item.id}`]);
        },
        color: 'green',
        title: 'Editar',
      },
      {
        click: (event, item) => {
          event.preventDefault();
          this.deletePost(item.id);
        },
        color: 'red',
        title: 'Excluir',
      },
    ],
    columns: [
      {
        id: 'title',
        title: 'Título',
      },
      {
        id: 'url',
        title: 'URL',
      },
    ],
  });

  postId: string | null = null;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.loadingService.start();
    this.blogService
      .listPost()
      .pipe(finalize(() => this.loadingService.stop()))
      .subscribe((res) => {
        this.postsGrid.setData(res.data);
      });
  }

  deletePost(id?: number | string) {
    if (!id) return;
    const validateOperation = window.confirm(
      'Tem certeza que gostaria de excluir este post?'
    );
    if (validateOperation)
      this.blogService
        .deletePost(id)
        .pipe(finalize(() => this.getPostList()))
        .subscribe();
  }
}
