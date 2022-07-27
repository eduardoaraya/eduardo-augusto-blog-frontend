import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryInterface } from 'src/app/http/interfaces/category.interface';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss'],
})
export class FormCategoryComponent implements OnInit, OnChanges {
  @Output()
  submit = new EventEmitter<CategoryInterface>();

  @Input()
  category: CategoryInterface | null = null;

  form: FormGroup = this.formBuilder.group({
    name: [null, Validators.required],
    active: [false],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnChanges({ category }: SimpleChanges): void {
    if (category.currentValue?.id) {
      const { name, active } = category.currentValue;
      return this.form.patchValue({
        name,
        active,
      });
    }
    this.form.reset();
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.form.invalid) return;
    const { active, ...body } = this.form.getRawValue();
    this.submit.emit({
      active: active ? true : false,
      categoryId: this.category?.id,
      ...body,
    });
    this.form.reset();
  }
}
