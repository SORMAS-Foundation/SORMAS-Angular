import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collapsable-box',
  templateUrl: './collapsable-box.component.html',
  styleUrls: ['./collapsable-box.component.scss'],
})
export class CollapsableBoxComponent {
  @Input() expanded = false;
  @Input() boxTitle = '';
  @Input() actionText = '';
  @Input() appearance: 'box' | 'section' = 'box';
  @Input() iconExpand = 'add';
  @Input() iconCollapse = 'remove';

  @Output() action: EventEmitter<string> = new EventEmitter();

  doAction(event: any): void {
    event.stopPropagation();
    this.action.emit(this.actionText);
  }
}
