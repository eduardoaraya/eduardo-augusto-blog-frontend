import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent],
  exports: [GridComponent],
})
export class SharedModule {}
