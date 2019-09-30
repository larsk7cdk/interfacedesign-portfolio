import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { GestaltloveComponent } from './gestaltlove.component';

@NgModule({
  declarations: [GestaltloveComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [GestaltloveComponent]
})
export class GestaltloveModule {}
