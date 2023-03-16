import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../_services/helper.service";

export interface RouteItem {
  route: string;
  legacyPath: string;
  label: string;
  selectedLink: string;
  icon?: string;
}

export const routesConfig: RouteItem[] = [
  { route: '', legacyPath: 'dashboard', label: 'captions.mainMenuDashboard', selectedLink: 'dashboard', icon: 'analytics' },
  { route: 'tasks/list', legacyPath: 'tasks', label: 'captions.mainMenuTasks', selectedLink: 'tasks', icon: 'checklist' },
  { route: 'messages/list',legacyPath: 'messages',  label: 'captions.mainMenuExternalMessages', selectedLink: 'messages', icon: 'all-inbox' },
  { route: 'msers/list', legacyPath: 'msers', label: 'captions.mainMenuAggregateReports', selectedLink: 'msers' },
  { route: 'persons/list',legacyPath: 'persons',  label: 'captions.mainMenuPersons', selectedLink: 'persons', icon: 'person' },
  { route: 'cases/list', legacyPath: 'cases', label: 'captions.mainMenuCases', selectedLink: 'cases', icon: 'recent-patient' },
  { route: 'contacts/list', legacyPath: 'contacts', label: 'captions.mainMenuContacts', selectedLink: 'contacts', icon: 'handshake' },
  { route: 'events/list', legacyPath: 'events', label: 'captions.mainMenuEvents', selectedLink: 'events', icon: 'phone' },
  { route: 'samples/list',legacyPath: 'samples',  label: 'captions.mainMenuSamples', selectedLink: 'samples' },
  { route: 'entries/list',legacyPath: 'entries',  label: 'captions.mainMenuEntries', selectedLink: 'entries' },
  { route: 'immunizations/list',legacyPath: 'immunizations',  label: 'captions.mainMenuImmunizations', selectedLink: 'immunizations' },
  { route: 'shares/list', legacyPath: 'shares', label: 'captions.mainMenuShareRequests', selectedLink: 'shares', icon: 'share' },
  { route: 'stats', legacyPath: 'stats', label: 'captions.mainMenuStatistics', selectedLink: 'stats', icon: 'grouped-bar-chart'  },
  { route: 'users/list', legacyPath: 'users', label: 'captions.mainMenuUsers', selectedLink: 'users' },
  { route: 'reports/list', legacyPath: 'reports', label: 'captions.mainMenuReports', selectedLink: 'reports' },
  { route: 'configuration', legacyPath: 'configuration', label: 'captions.mainMenuConfiguration', selectedLink: 'configuration', icon: 'settings' },
  { route: 'about', legacyPath: 'about', label: 'captions.mainMenuAbout', selectedLink: 'about', icon: 'info' },
];

export const userRoutesConfig: RouteItem[] = [
  { route: 'user-profile', legacyPath: '', label: 'mainMenuMyProfile', selectedLink: 'user-profile', icon: 'account_circle', },
  { route: 'logout', legacyPath: '', label: 'logout', selectedLink: 'logout', icon: 'logout', },
];

@Component({
  selector: 'app-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  routeConfig: RouteItem[] = routesConfig;
  userRouteConfig: RouteItem[] = userRoutesConfig;
  selectedRoute = '';
  legacyUrl: string;

  constructor(private helperService: HelperService) {
    this.legacyUrl = helperService.getLegacyUrl();
  }

  ngOnInit(): void {
  }

  isAvailable(feature: string, userRight: string) : boolean {
    // todo match against features and user rights retrieved from rest-api when the component is started
    return true;
  }

  isSelectedLink(link: string): boolean {
    const currentRoute = this.selectedRoute === '/' ? '/dashboard' : this.selectedRoute;
    return currentRoute.startsWith(`/${link}`);
  }

  getLegacyLink(legacyPath: string) : string {
    return this.legacyUrl + legacyPath;
  }

  useLegacyLink(legacyPath: string) : boolean {
    return this.legacyUrl.length > 0 && legacyPath.length > 0;
  }
}
