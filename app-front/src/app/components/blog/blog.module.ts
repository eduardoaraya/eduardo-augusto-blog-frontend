import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogPostComponent, BlogSidebarComponent, BlogCardComponent],
  exports: [BlogPostComponent, BlogSidebarComponent, BlogCardComponent],
  imports: [CommonModule, RouterModule],
})
export class BlogModule {}
