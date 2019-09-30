import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { InterfaceDesignComponent } from './features/interface-design/interface-design.component';
import { InteractionsDesignComponent } from './features/interactions-design/interactions-design.component';
import { GraphicDesignComponent } from './features/graphic-design/graphic-design.component';
import { UsabilityComponent } from './features/usability/usability.component';
import { SketchingComponent } from './features/sketching/sketching.component';
import { GestaltloveComponent } from './features/gestaltlove/gestaltlove.component';

export const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sketching',
    component: SketchingComponent
  },
  {
    path: 'gestaltlove',
    component: GestaltloveComponent
  },

  // {
  //   path: 'interface-design',
  //   component: InterfaceDesignComponent
  // },
  // {
  //   path: 'interactions-design',
  //   component: InteractionsDesignComponent
  // },
  // {
  //   path: 'graphic-design',
  //   component: GraphicDesignComponent
  // },
  // {
  //   path: 'usability',
  //   component: UsabilityComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
];
