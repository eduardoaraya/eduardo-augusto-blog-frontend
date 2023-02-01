import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { FullScreenLoaderModule } from '../full-screen-loader/full-screen-loader.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { TemplateComponent } from './template/template.component';

@NgModule({
  imports: [CommonModule, RouterModule, FullScreenLoaderModule],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TemplateComponent,
    HeaderDirective,
  ],
  exports: [HeaderComponent, FooterComponent, TemplateComponent],
})
export class LayoutModule {}
