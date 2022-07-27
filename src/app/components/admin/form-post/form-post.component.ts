import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Observable } from 'rxjs';
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
    url: [null, Validators.required],
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
      this.blogService.getPostById(+postId).subscribe((res) => {
        this.form.patchValue({ ...res.data, postId: res.data.id });
      });
    }
  }

  getTitle() {
    return this.form.get('postId')?.value
      ? `Atualização: ${this.form.get('title')?.value}`
      : 'Cadastro';
  }

  async submit(): Promise<void> {
    const postId = +this.form.get('postId')?.value;
    const { url, ...body } = this.form.getRawValue();

    if (postId) this.blogService.updatePost(+postId, body).subscribe();
    else this.blogService.createPost(body).subscribe();
  }

  listCategories(): void {
    this.categoryService
      .listAll()
      .subscribe(
        (categoriesOptions) => (this.categoriesOptions = categoriesOptions.data)
      );
  }
}
