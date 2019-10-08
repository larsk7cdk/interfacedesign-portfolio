import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { HelsingeKameludlejningComponent } from './helsinge-kameludlejning.component';

@NgModule({
  declarations: [HelsingeKameludlejningComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [HelsingeKameludlejningComponent]
})
export class HelsingeKameludlejningModule {}
