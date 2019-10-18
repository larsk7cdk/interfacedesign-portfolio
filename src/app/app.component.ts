import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  NAV_ITEMS = [
    { routerLink: 'home', routerName: 'Forside' },
    { routerLink: 'sketching', routerName: 'Sketching' },
    { routerLink: 'gestaltlove', routerName: 'Gestaltlove' },
    {
      routerLink: 'farvelaereogtypografi',
      routerName: 'Farvelære og Typografi'
    },
    {
      routerLink: 'helsinge-kameludlejning',
      routerName: 'Helsinge Kameludlejning'
    },
    {
      routerLink: 'gangstertest',
      routerName: 'Gangstertest'
    },
    {
      routerLink: 'ekspertvurdering',
      routerName: 'Ekspertvurdering'
    }
    // { routerLink: 'interface-design', routerName: 'Interface Design' },
    // { routerLink: 'interactions-design', routerName: 'Interaktions Design' },
    // { routerLink: 'graphic-design', routerName: 'Grafisk Design' },
    // { routerLink: 'usability', routerName: 'Usability' },
    // { routerLink: 'contact', routerName: 'Kontakt' }
  ];
}
