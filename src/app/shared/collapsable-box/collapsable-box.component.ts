import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collapsable-box',
  templateUrl: './collapsable-box.component.html',
  styleUrls: ['./collapsable-box.component.scss'],
})
export class CollapsableBoxComponent {
  @Input() expanded = false;
  @Input() boxTitle = '';
  @Input() actionText = '';
  @Input() actionLink = '';
  @Input() actionLinkParams = {};
  @Input() appearance: 'box' | 'section' = 'box';
  @Input() iconExpand = 'add';
  @Input() iconCollapse = 'remove';
  @Input() showGroupLink = false;

  @Output() action: EventEmitter<string> = new EventEmitter();

  constructor(private route: Router) {}

  navigate(navigationLink: string): void {
    this.route.navigate([navigationLink]);
  }

  doAction(event: any): void {
    event.stopPropagation();
    this.action.emit(this.actionText);
  }
}
