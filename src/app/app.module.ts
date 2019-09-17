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

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false, useHash: true }),
    SketchingModule,
    InterfaceDesignModule,
    InteractionsDesignModule,
    GraphicDesignModule,
    UsabilityModule,
    ContactModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
