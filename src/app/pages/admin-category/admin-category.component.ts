import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';
import { CategoryService } from 'src/app/http/services/category/category.service';
import { GridRowInterface } from 'src/app/shared/grid/grid-model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {
  categories: CategoryInterface[] = [];

  category: CategoryInterface | null = null;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.listAll().subscribe(({ data }) => {
      this.categories = data;
    });
  }

  submit(data: CategoryInterface) {
    const action = data?.categoryId
      ? this.categoryService.update(data)
      : this.categoryService.create(data);

    action.subscribe(() => this.getCategories());
    this.selectData(null);
  }

  selectData(data: CategoryInterface | null) {
    this.category = data;
  }
}
