import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';
import { CategoryService } from 'src/app/http/services/category/category.service';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
})
export class BlogSidebarComponent implements OnInit {
  categories: CategoryInterface[] = [];

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listCategories();
  }

  filter(categoryId?: number): void {
    this.router.navigate([`blog/${categoryId}`]);
  }

  listCategories() {
    this.categoryService
      .listAllActive()
      .subscribe((categories) => (this.categories = categories.data));
  }
}
