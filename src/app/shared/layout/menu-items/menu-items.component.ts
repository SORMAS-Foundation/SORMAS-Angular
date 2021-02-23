import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { RouteItem } from '../shared/route-item.model';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MatDrawer],
})
@Injectable()
export class MenuItemsComponent {
  @Input() routeConfig: RouteItem[] = [];
  @Output() routeChange: EventEmitter<any> = new EventEmitter();

  doRouteChange(route: RouteItem): void {
    this.routeChange.emit(route);
  }
}
