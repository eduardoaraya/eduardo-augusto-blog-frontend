import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { BlogPageComponent } from '../pages/blog/blog.component';
import { ContactPageComponent } from '../pages/contact/contact.component';
import { HomeComponent } from '../pages/home/home.component';
import { PostComponent } from '../pages/post/post.component';
import { ServicesPageComponent } from '../pages/services/services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'services',
    component: ServicesPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'blog',
    component: BlogPageComponent,
  },
  {
    path: 'blog/:categoryId',
    component: BlogPageComponent,
  },
  {
    path: 'post/:slug',
    component: PostComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
