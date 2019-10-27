import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EkspertvurderingComponent } from './ekspertvurdering.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [EkspertvurderingComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [EkspertvurderingComponent]
})
export class EkspertvurderingModule {}
