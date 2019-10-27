import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { AIComponent } from './ai.component';

@NgModule({
  declarations: [AIComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [AIComponent]
})
export class AIModule {}
