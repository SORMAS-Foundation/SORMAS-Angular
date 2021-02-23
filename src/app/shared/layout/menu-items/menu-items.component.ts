import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { RouteItem } from '../shared/route-item.model';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
@Injectable()
export class MenuItemsComponent {
  @Input() routeConfig: RouteItem[] = [];
  @Output() routeChange: EventEmitter<any> = new EventEmitter();

  announceRouteChange(route: RouteItem): void {
    this.routeChange.emit(route);
  }
}
