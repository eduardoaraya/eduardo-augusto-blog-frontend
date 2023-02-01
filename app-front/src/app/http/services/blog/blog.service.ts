import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs';
import {
  IPostCreateResult,
  PostInterface,
} from '../../interfaces/post.interface';
import { HttpAbstract } from '../http.abstract';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends HttpAbstract {
  constructor(http: HttpClient, private toastr: ToastrService) {
    super(http);
  }

  listPost() {
    return this.get<{ data: PostInterface[] }>('backoffice/posts');
  }

  generateUrl(title: string) {
    return this.post<{ title: string }, { data: string }>(
      'backoffice/post/generate-url',
      {
        title,
      }
    );
  }

  deletePost(postId: number | string) {
    return this.delete<{ data: string }>(`backoffice/post/${postId}`).pipe(
      catchError<any, any>(({ error }) =>
        this.toastr.error(error?.error, 'Error')
      ),
      tap(({ success }) => {
        if (success) this.toastr.success('Deleted!', 'Success');
      })
    );
  }

  createPost(body: PostInterface) {
    return this.post<PostInterface, IPostCreateResult>(
      'backoffice/post',
      body
    ).pipe(
      catchError<any, any>(({ error }) =>
        this.toastr.error(error?.error, 'Error')
      ),
      tap(({ success }) => {
        if (success) this.toastr.success('Created!', 'Success');
      })
    );
  }

  updatePost(postId: number, body: PostInterface) {
    return this.put<PostInterface, IPostCreateResult>(
      'backoffice/post/' + postId,
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

  getPostById(id: number) {
    return this.get<{ data: PostInterface }>(`backoffice/post/${id}`);
  }

  getPost(slug: string) {
    return this.get<{ data: PostInterface }>(`api/blog/post/${slug}`);
  }

  listPublishedPost() {
    return this.get<{ data: PostInterface[] }>('api/post');
  }

  listPublishedPostByCategory(categoryId: number) {
    return this.get<{ data: PostInterface[] }>(`api/blog/${categoryId}`);
  }
}
