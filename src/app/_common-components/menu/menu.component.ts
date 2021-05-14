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
  { link: '', label: _('Dashboard') },
  { link: 'about', label: _('About') },
  { link: 'tasks/list', label: _('Tasks') },
  { link: 'cases/list', label: _('Cases') },
  { link: 'events/list', label: _('Events') },
  { link: 'user-profile', label: _('My profile') },
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('animateMenu', [
      state('open', style({ 'overflow-y': 'hidden' })),
      state('close', style({ 'overflow-y': 'hidden' })),
      transition('open => close', [style({ height: '*' }), animate(2550, style({ height: 0 }))]),
      transition('close => open', [style({ height: 0 }), animate(250, style({ height: '*' }))]),
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
    this.menuOpen = closed || !this.menuOpen;
  }
}
