import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { FormPostComponent } from '../components/admin/form-post/form-post.component';
import { GridPostComponent } from '../components/admin/grid-post/grid-post.component';
import { LoginComponent } from '../components/admin/login/login.component';
import { AdminCategoryComponent } from '../pages/admin-category/admin-category.component';
import { AdminContentsComponent } from '../pages/admin-contents/admin-contents.component';
import { AdminPostsComponent } from '../pages/admin-posts/admin-posts.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'posts',
        component: AdminPostsComponent,
        children: [
          {
            path: '',
            component: GridPostComponent,
          },
          {
            path: 'new',
            component: FormPostComponent,
          },
          {
            path: 'edit/:postId',
            component: FormPostComponent,
          },
        ],
      },
      {
        path: 'content',
        component: AdminContentsComponent,
      },
      {
        path: 'category',
        component: AdminCategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
