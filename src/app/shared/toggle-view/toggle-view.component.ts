import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ViewOptions, VIEW_OPTIONS } from '../../_models/common';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss'],
})
export class ToggleViewComponent implements OnInit {
  @Input() value: ViewOptions = VIEW_OPTIONS.PRIMARY;
  @Input() iconViewPrimary = 'grid_view_black';
  @Input() iconViewSecondary = 'view_list_black';
  @Input() iconSize: 'small' | 'large' = 'small';

  @Output() selection: EventEmitter<ViewOptions> = new EventEmitter<ViewOptions>();

  viewOptions = VIEW_OPTIONS;
  active: ViewOptions;

  ngOnInit(): void {
    this.active = this.value;
  }

  onSelection(event: any): void {
    this.active = event.value;
    this.selection.emit(this.active);
  }
}
