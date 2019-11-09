import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { InterfaceDesignComponent } from './features/interface-design/interface-design.component';
import { InteractionsDesignComponent } from './features/interactions-design/interactions-design.component';
import { GraphicDesignComponent } from './features/graphic-design/graphic-design.component';
import { UsabilityComponent } from './features/usability/usability.component';
import { SketchingComponent } from './features/sketching/sketching.component';
import { GestaltloveComponent } from './features/gestaltlove/gestaltlove.component';
import { FarvelaereOgTypografiComponent } from './features/farvelaereogtypografi/farvelaereogtypografi.component';
import { HelsingeKameludlejningComponent } from './features/helsinge-kameludlejning/helsinge-kameludlejning.component';
import { GangstertestComponent } from './features/gangstertest/gangstertest.component';
import { EkspertvurderingComponent } from './features/ekspertvurdering/ekspertvurdering.component';
import { IAComponent } from './features/ia/ia.component';
import { ResponsiveComponent } from './features/uge10-responsive/responsive.component';

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
  {
    path: 'farvelaereogtypografi',
    component: FarvelaereOgTypografiComponent
  },
  {
    path: 'helsinge-kameludlejning',
    component: HelsingeKameludlejningComponent
  },
  {
    path: 'gangstertest',
    component: GangstertestComponent
  },
  {
    path: 'ekspertvurdering',
    component: EkspertvurderingComponent
  },
  {
    path: 'ia',
    component: IAComponent
  },
  {
    path: 'responsive',
    component: ResponsiveComponent
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
