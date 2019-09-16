import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SketchingComponent } from './sketching.component';

@NgModule({
  declarations: [SketchingComponent],
  imports: [CommonModule],
  exports: [SketchingComponent]
})
export class SketchingModule {}
