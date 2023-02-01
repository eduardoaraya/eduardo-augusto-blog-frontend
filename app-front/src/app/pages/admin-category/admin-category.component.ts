import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';
import { CategoryService } from 'src/app/http/services/category/category.service';
import { LoadingService } from 'src/app/services/loading.service';
import { GridRowInterface } from 'src/app/shared/grid/grid-model';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss'],
})
export class AdminCategoryComponent implements OnInit {
  categories: CategoryInterface[] = [];

  category: CategoryInterface | null = null;
  loading: boolean = false;

  constructor(
    private categoryService: CategoryService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.toggleLoading();
    this.categoryService
      .listAll()
      .pipe(finalize(() => this.toggleLoading()))
      .subscribe(({ data }) => {
        this.categories = data;
      });
  }

  submit(data: CategoryInterface) {
    const action = data?.categoryId
      ? this.categoryService.update(data)
      : this.categoryService.create(data);

    this.toggleLoading();
    action
      .pipe(finalize(() => this.toggleLoading()))
      .subscribe(() => this.getCategories());

    this.selectData(null);
  }

  selectData(data: CategoryInterface | null) {
    this.category = data;
  }

  toggleLoading(): void {
    this.loading = !this.loading;
    if (this.loading) {
      this.loadingService.start();
    } else {
      this.loadingService.stop();
    }
  }

  deleteCategory(categoryId?: string | number) {
    if (!categoryId) return;
    const validateOperation = window.confirm(
      'Tem certeza que gostaria de excluir esta categoria?'
    );
    if (validateOperation)
      this.categoryService
        .deleteCategory(categoryId)
        .pipe(finalize(() => this.getCategories()))
        .subscribe();
  }
}
