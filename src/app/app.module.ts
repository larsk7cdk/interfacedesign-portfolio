import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactModule } from './features/contact/contact.module';
import { InterfaceDesignModule } from './features/interface-design/interface-design.module';
import { InteractionsDesignModule } from './features/interactions-design/interactions-design.module';
import { GraphicDesignModule } from './features/graphic-design/graphic-design.module';
import { UsabilityModule } from './features/usability/usability.module';
import { SketchingModule } from './features/sketching/sketching.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestaltloveModule } from './features/gestaltlove/gestaltlove.module';
import { FarvelaereOgTypografiModule } from './features/farvelaereogtypografi/farvelaereogtypografi.module';
import { HelsingeKameludlejningModule } from './features/helsinge-kameludlejning/helsinge-kameludlejning.module';
import { GangstertestModule } from './features/gangstertest/gangstertest.module';
import { EkspertvurderingModule } from './features/ekspertvurdering/ekspertvurdering.module';
import { AIModule } from './features/ia/ai.module';
import { ResponsiveModule } from './features/uge10-responsive/responsive.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false, useHash: true }),
    SketchingModule,
    InterfaceDesignModule,
    InteractionsDesignModule,
    GraphicDesignModule,
    UsabilityModule,
    ContactModule,
    GestaltloveModule,
    FarvelaereOgTypografiModule,
    HelsingeKameludlejningModule,
    GangstertestModule,
    EkspertvurderingModule,
    AIModule,
    ResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
