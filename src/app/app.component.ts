import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  NAV_ITEMS = [
    { routerLink: 'home', routerName: 'Forside' },
    { routerLink: 'interface-design', routerName: 'Interface Design' },
    { routerLink: 'interactions-design', routerName: 'Interaktions Design' },
    { routerLink: 'graphic-design', routerName: 'Grafisk Design' },
    { routerLink: 'usability', routerName: 'Usability' },
    { routerLink: 'contact', routerName: 'Kontakt' }
  ];
}
