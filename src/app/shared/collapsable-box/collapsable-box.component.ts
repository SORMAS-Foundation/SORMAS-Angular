import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsable-box',
  templateUrl: './collapsable-box.component.html',
  styleUrls: ['./collapsable-box.component.scss'],
})
export class CollapsableBoxComponent {
  @Input() collapsed = false;
  @Input() boxTitle = '';
}
