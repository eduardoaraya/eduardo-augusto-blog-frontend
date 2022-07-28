import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { finalize, Observable } from 'rxjs';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';
import { BlogService } from 'src/app/http/services/blog/blog.service';
import { CategoryService } from 'src/app/http/services/category/category.service';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss'],
})
export class FormPostComponent implements OnInit {
  form = this.formBuilder.group({
    postId: [null],
    title: [null, Validators.required],
    url: [{ value: null, disabled: true }, Validators.required],
    shortDescription: [null, Validators.required],
    postContent: [null, Validators.required],
    published: [null],
    categoryId: [null, Validators.required],
  });

  configEditor: AngularEditorConfig = {
    height: '300px',
    editable: true,
  };
  categoriesOptions: CategoryInterface[] = [];
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private categoryService: CategoryService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const postId = this.router.snapshot.paramMap.get('postId');
    this.listCategories();

    if (postId) {
      this.toggleLoading();
      this.blogService
        .getPostById(+postId)
        .pipe(finalize(() => this.toggleLoading()))
        .subscribe((res) => {
          this.form.patchValue({ ...res.data, postId: res.data.id });
        });
    }
  }

  toggleLoading(): void {
    this.loading = !this.loading;
  }

  getTitle() {
    return this.form.get('postId')?.value
      ? `Atualização: ${this.form.get('title')?.value}`
      : 'Cadastro';
  }

  async submit(): Promise<void> {
    if (this.form.invalid) return;
    const { postId, url, ...body } = this.form.getRawValue();
    this.toggleLoading();
    if (postId)
      this.blogService
        .updatePost(+postId, body)
        .pipe(finalize(() => this.toggleLoading()))
        .subscribe();
    else
      this.blogService
        .createPost(body)
        .pipe(finalize(() => this.toggleLoading()))
        .subscribe();
  }

  listCategories(): void {
    this.categoryService
      .listAll()
      .subscribe(
        (categoriesOptions) => (this.categoriesOptions = categoriesOptions.data)
      );
  }
}
