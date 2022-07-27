import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from '../pages/about/about.component';
import { ServicesPageComponent } from '../pages/services/services.component';
import { ContactPageComponent } from '../pages/contact/contact.component';
import { BlogPageComponent } from '../pages/blog/blog.component';
import { LayoutModule } from '../components/layout/layout.module';
import { AboutModule } from '../components/about/about.module';
import { BlogModule } from '../components/blog/blog.module';
import { ContactModule } from '../components/contact/contact.module';
import { ServicesModule } from '../components/services/services.module';
import { HomeComponent } from '../pages/home/home.component';
import { PostComponent } from '../pages/post/post.component';
import { AdminModule } from '../admin/admin.module';
import { HttpModule } from '../http/http.module';
import { SharedModule } from '../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesPageComponent,
    ContactPageComponent,
    BlogPageComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpModule,
    LayoutModule,
    AboutModule,
    BlogModule,
    ContactModule,
    ServicesModule,
    AdminModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
