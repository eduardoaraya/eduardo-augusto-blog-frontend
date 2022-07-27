import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlogService } from './services/blog/blog.service';
import { CategoryService } from './services/category/category.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [BlogService, CategoryService],
})
export class HttpModule {}
