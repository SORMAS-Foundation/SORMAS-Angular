import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TranslateService } from '@ngx-translate/core';
import logoPath from '../../../assets/img/sormas-logo.svg';

export interface RouteItem {
  link: string;
  label: string;
}

export const routesConfig: RouteItem[] = [
  { link: '', label: _('mainMenuDashboard') },
  { link: 'about', label: _('mainMenuAbout') },
  { link: 'tasks/list', label: _('mainMenuTasks') },
  { link: 'cases/list', label: _('mainMenuCases') },
  { link: 'events/list', label: _('mainMenuEvents') },
  { link: 'contacts/list', label: _('mainMenuContacts') },
  { link: 'samples/list', label: _('mainMenuSamples') },
  { link: 'user-profile', label: _('mainMenuMyProfile') },
  { link: 'persons/list', label: _('mainMenuPersons') },
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
