import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactModule } from './features/contact/contact.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false }),
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
