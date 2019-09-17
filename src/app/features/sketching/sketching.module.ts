import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SketchingComponent } from './sketching.component';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [SketchingComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [SketchingComponent]
})
export class SketchingModule {}
