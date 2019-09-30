import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarvelaereOgTypografiComponent } from './farvelaereogtypografi.component';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [FarvelaereOgTypografiComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [FarvelaereOgTypografiComponent]
})
export class FarvelaereOgTypografiModule {}
