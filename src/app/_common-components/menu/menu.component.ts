import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { asyncScheduler, Subject, Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { throttleTime } from 'rxjs/operators';
import { HelperService } from '../../_services/helper.service';

export interface RouteItem {
  link: string;
  label: string;
  selectedLink: string;
  icon?: string;
}

export const routesConfig: RouteItem[] = [
  { link: '', label: 'captions.mainMenuDashboard', selectedLink: 'dashboard' },
  { link: 'tasks/list', label: 'captions.mainMenuTasks', selectedLink: 'tasks' },
  { link: 'cases/list', label: 'captions.mainMenuCases', selectedLink: 'cases' },
  { link: 'msers/list', label: 'captions.mainMenuAggregateReports', selectedLink: 'msers' },
  { link: 'events/list', label: 'captions.mainMenuEvents', selectedLink: 'events' },
  { link: 'contacts/list', label: 'captions.mainMenuContacts', selectedLink: 'contacts' },
  { link: 'samples/list', label: 'captions.mainMenuSamples', selectedLink: 'samples' },
  { link: 'shares/list', label: 'captions.mainMenuShareRequests', selectedLink: 'shares' },
  { link: 'entries/list', label: 'captions.mainMenuEntries', selectedLink: 'entries' },
  { link: 'reports/list', label: 'captions.mainMenuReports', selectedLink: 'reports' },
  { link: 'immunizations/list', label: 'Immunizations', selectedLink: 'immunizations' },
  { link: 'stats', label: 'captions.mainMenuStatistics', selectedLink: 'stats' },
  { link: 'persons/list', label: 'captions.mainMenuPersons', selectedLink: 'persons' },
  { link: 'users/list', label: 'captions.mainMenuUsers', selectedLink: 'users' },
];

export const userRoutesConfig: RouteItem[] = [
  { link: 'about', label: 'captions.mainMenuAbout', selectedLink: 'about', icon: 'info' },
  {
    link: 'configuration',
    label: 'captions.mainMenuConfiguration',
    selectedLink: 'configuration',
    icon: 'settings',
  },
  {
    link: 'user-profile',
    label: 'mainMenuMyProfile',
    selectedLink: 'user-profile',
    icon: 'account_circle',
  },
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
export class MenuComponent implements AfterViewInit, OnDestroy {
  routeConfig: RouteItem[] = routesConfig;
  userRouteConfig: RouteItem[] = userRoutesConfig;

  menuOpen = false;
  collapsed = false;
  requiredSpace: number;
  selectedRoute = '';
  width$ = new Subject<number>();
  resizeObserver: any;

  private subscription: Subscription = new Subscription();
  @ViewChild('menu', { read: ElementRef }) menu: ElementRef;
  @ViewChild('mainMenu', { read: ElementRef }) mainMenu: ElementRef;
  @ViewChild('userMenu', { read: ElementRef }) userMenu: ElementRef;
  @ViewChild('logo', { read: ElementRef }) logo: ElementRef;

  constructor(
    public router: Router,
    public helperService: HelperService,
    private host: ElementRef
  ) {
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.selectedRoute = event.url;
          this.menuOpen = false;
        }
      })
    );
  }

  ngAfterViewInit(): void {
    this.subscription.add(
      this.width$
        .pipe(throttleTime(200, asyncScheduler, { leading: false, trailing: true }))
        .subscribe((value) => {
          if (!this.requiredSpace) {
            this.requiredSpace =
              this.logo?.nativeElement?.clientWidth +
              this.mainMenu?.nativeElement?.scrollWidth +
              this.userMenu?.nativeElement?.clientWidth;
          }
          this.collapsed = value <= this.requiredSpace;
        })
    );

    this.resizeObserver = new ResizeObserver((entries) => {
      this.width$.next(Math.floor(entries[0].contentRect.width));
    });

    this.resizeObserver.observe(this.host.nativeElement);
  }

  toggleMenu(closed?: boolean): void {
    this.menuOpen = closed ?? !this.menuOpen;
  }

  isSelectedLink(link: string): boolean {
    const currentRoute = this.selectedRoute === '/' ? '/dashboard' : this.selectedRoute;
    return currentRoute.startsWith(`/${link}`);
  }

  ngOnDestroy(): void {
    this.resizeObserver.unobserve(this.host.nativeElement);
    this.subscription.unsubscribe();
  }
}
