import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import logoPath from '../../../assets/img/sormas-logo.svg';

export interface RouteItem {
  link: string;
  label: string;
}

export const routesConfig: RouteItem[] = [
  { link: '', label: 'mainMenuDashboard' },
  { link: 'about', label: 'mainMenuAbout' },
  { link: 'tasks/list', label: 'mainMenuTasks' },
  { link: 'cases/list', label: 'mainMenuCases' },
  { link: 'events/list', label: 'mainMenuEvents' },
  { link: 'contacts/list', label: 'mainMenuContacts' },
  { link: 'samples/list', label: 'mainMenuSamples' },
  { link: 'user-profile', label: 'mainMenuMyProfile' },
  { link: 'persons/list', label: 'mainMenuPersons' },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('animateMenu', [
      state(
        'close',
        style({
          height: '68px',
        })
      ),
      state(
        'open',
        style({
          maxHeight: '2000px',
        })
      ),
      transition('close=>open', animate('200ms')),
      transition('open=>close', animate('200ms')),
    ]),
  ],
})
export class MenuComponent {
  routeConfig: RouteItem[] = routesConfig;
  logo = logoPath;

  navigation = routesConfig;
  menuOpen = false;

  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
  }

  toggleMenu(closed?: boolean): void {
    this.menuOpen = closed ?? !this.menuOpen;
  }
}
