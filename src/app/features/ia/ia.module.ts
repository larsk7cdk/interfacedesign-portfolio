import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';
import { IAComponent } from './ia.component';

@NgModule({
  declarations: [IAComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [IAComponent]
})
export class IAModule {}
