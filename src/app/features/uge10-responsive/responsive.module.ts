import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { ResponsiveComponent } from './responsive.component';

@NgModule({
  declarations: [ResponsiveComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [ResponsiveComponent]
})
export class ResponsiveModule {}
