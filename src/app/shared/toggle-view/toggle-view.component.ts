import { Component, Input } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../_models/common';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
})
export class ToggleViewComponent {
  @Input() value: ViewOptions = VIEW_OPTIONS.PRIMARY;
  @Input() iconViewPrimary = 'grid_view_black';
  @Input() iconViewSecondary = 'view_list_black';
  @Input() iconSize: 'small' | 'large' = 'small';

  viewOptions = VIEW_OPTIONS;
}
