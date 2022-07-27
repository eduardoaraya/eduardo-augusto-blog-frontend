import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostInterface } from 'src/app/http/interfaces/post.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';
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

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList() {
    this.blogService.listPost().subscribe((res) => {
      this.postsGrid.setData(res.data);
    });
  }
}
