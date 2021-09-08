import { Component, Input } from '@angular/core';
import { MenuPositionX } from '@angular/material/menu';
import { ButtonType, BUTTON_TYPE } from '../../app.constants';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent {
  @Input() buttonText = 'Open menu';
  @Input() panelClass = '';
  @Input() disabled = false;
  @Input() color = 'primary';
  @Input() appearance: ButtonType = BUTTON_TYPE.STROKED;
  @Input() chevron = true;
  @Input() chevronOpenIcon = 'arrow_drop_down';
  @Input() chevronCloseIcon = 'arrow_drop_up';
  @Input() horizontalPosition: MenuPositionX = 'after';

  buttonTypes = BUTTON_TYPE;
}
