import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { PersuasiveDesignComponent } from './persuasive-design.component';

@NgModule({
  declarations: [PersuasiveDesignComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [PersuasiveDesignComponent]
})
export class PersuasiveDesignModule {}
