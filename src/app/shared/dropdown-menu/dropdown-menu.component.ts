import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() buttonText = 'Open menu';
  @Input() panelClass = 'dropdown-menu';
}
