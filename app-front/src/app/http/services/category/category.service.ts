import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import {
  CategoryInterface,
  ICategoryUpdateResult,
} from '../../interfaces/category.interface';
import { HttpAbstract } from '../http.abstract';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends HttpAbstract {
  constructor(http: HttpClient, private toastr: ToastrService) {
    super(http);
  }

  listAllActive() {
    return this.get<{ data: CategoryInterface[] }>('api/category');
  }

  listAll() {
    return this.get<{ data: CategoryInterface[] }>('backoffice/category');
  }

  create(data: CategoryInterface) {
    return this.post<CategoryInterface, ICategoryUpdateResult>(
      'backoffice/category',
      data
    ).pipe(
      catchError<any, any>(({ error }) =>
        this.toastr.error(error?.error, 'Error')
      ),
      tap(({ success }) => {
        if (success) this.toastr.success('Created!', 'Success');
      })
    );
  }

  deleteCategory(categoryId: string | number) {
    return this.delete<{ data: boolean }>(
      `backoffice/category/${categoryId}`
    ).pipe(
      catchError<any, any>(({ error }) =>
        this.toastr.error(error?.error, 'Error')
      ),
      tap(({ success }) => {
        if (success) this.toastr.success('Deleted!', 'Success');
      })
    );
  }

  update(data: CategoryInterface) {
    const { categoryId, ...body } = data;
    return this.put<CategoryInterface, ICategoryUpdateResult>(
      'backoffice/category/' + categoryId,
      body
    ).pipe(
      catchError<any, any>(({ error }) =>
        this.toastr.error(error?.error, 'Error')
      ),
      tap(({ success }) => {
        if (success) this.toastr.success('Updated!', 'Success');
      })
    );
  }
}
