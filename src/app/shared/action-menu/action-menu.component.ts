import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../_models/common';

@Component({
  selector: 'app-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss'],
})
export class ActionMenuComponent {
  @Input() config: NavItem[] | undefined = [];

  @Output() action: EventEmitter<string> = new EventEmitter();

  onItemSelected(event: any): void {
    this.action.emit(event);
  }

  collapse(): void {
    console.log('collapsed now!');
  }

  expand(): void {
    console.log('expanded now!');
  }
}
