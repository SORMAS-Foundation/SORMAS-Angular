import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { RouteItem } from '../shared/route-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
@Injectable()
export class MenuComponent {
  @Input() routeConfig: RouteItem[] = [];
  @Output() routeChange: EventEmitter<any> = new EventEmitter();

  announceRouteChange(route: RouteItem): void {
    this.routeChange.emit(route);
  }
}
