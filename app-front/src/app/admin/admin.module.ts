import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-router.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AdminCategoryComponent } from '../pages/admin-category/admin-category.component';
import { AdminContentsComponent } from '../pages/admin-contents/admin-contents.component';
import { AdminPostsComponent } from '../pages/admin-posts/admin-posts.component';
import { FormCategoryComponent } from '../components/admin/form-category/form-category.component';
import { FormContentsComponent } from '../components/admin/form-contents/form-contents.component';
import { FormPostComponent } from '../components/admin/form-post/form-post.component';
import { GridPostComponent } from '../components/admin/grid-post/grid-post.component';
import { AdminLayoutComponent } from '../components/admin/admin-layout/admin-layout.component';
import { HttpModule } from '../http/http.module';
import { SharedModule } from '../shared/shared.module';
import { GridCategoryComponent } from '../components/admin/grid-category/grid-category.component';
import { AuthService } from '../http/services/admin/auth.service';
import { LoginComponent } from '../components/admin/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';
import { LoadingService } from '../services/loading.service';
import { FullScreenLoaderModule } from '../components/full-screen-loader/full-screen-loader.module';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminCategoryComponent,
    AdminContentsComponent,
    AdminPostsComponent,
    FormCategoryComponent,
    FormContentsComponent,
    FormPostComponent,
    GridPostComponent,
    GridCategoryComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    AdminRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FullScreenLoaderModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AdminModule {}
