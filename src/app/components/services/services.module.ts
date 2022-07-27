import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesSectionComponent } from './services-section/services-section.component';

@NgModule({
  declarations: [ServicesSectionComponent],
  exports: [ServicesSectionComponent],
  imports: [CommonModule],
})
export class ServicesModule {}
