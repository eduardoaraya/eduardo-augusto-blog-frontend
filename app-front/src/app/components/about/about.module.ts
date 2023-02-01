import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutSectionComponent],
  exports: [AboutSectionComponent],
  imports: [CommonModule, RouterModule],
})
export class AboutModule {}
