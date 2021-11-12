import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { NavItem } from '../_models/common';
import { actionsViewOptionsDefs } from './dashboard-actions-data';
import { ACTIONS_DASHBOARD_VIEW_OPTIONS } from '../_constants/actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnDestroy {
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  private subscription: Subscription[] = [];

  public currentRoute: string;

  constructor(private router: Router) {
    this.subscription.push(
      // @ts-ignore
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (event.url === '/') {
            this.currentRoute = 'surveillance';
          }
          if (event.url.includes('contact-dashboard')) {
            this.currentRoute = 'contacts';
          }
        }
      })
    );
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_DASHBOARD_VIEW_OPTIONS.SURVEILLANCE:
        this.router.navigate(['/']);
        break;
      case ACTIONS_DASHBOARD_VIEW_OPTIONS.CONTACTS:
        this.router.navigate(['/contact-dashboard']);
        break;
      default:
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
