import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GangstertestComponent } from './gangstertest.component';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [GangstertestComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [GangstertestComponent]
})
export class GangstertestModule {}
