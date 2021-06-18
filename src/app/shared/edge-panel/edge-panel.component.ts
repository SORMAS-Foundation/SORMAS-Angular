import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN,
  EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN,
  EDGE_PANEL_TYPE,
  EdgePanelType,
} from '../../app.constants';
import { PANEL_CONFIG } from './edge-panel-config-data';

@Component({
  selector: 'app-edge-panel',
  templateUrl: './edge-panel.component.html',
  styleUrls: ['./edge-panel.component.scss'],
})
export class EdgePanelComponent implements OnInit {
  @Input() service: any;
  @Input() scopeId: string | undefined;
  @Input() type: EdgePanelType = EDGE_PANEL_TYPE.TASK;

  fetch: Observable<any>;
  initialSize: number;
  config: any;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.config = PANEL_CONFIG[this.type];
    this.fetch = this.service?.getAll(
      {
        offset: 0,
        size: 999,
      },
      null,
      [
        {
          field: 'caze',
          value: {
            uuid: this.scopeId,
          },
        },
      ]
    );

    this.breakpointObserver
      .observe(['(max-width: 1024px)', '(min-width: 1680px)'])
      .subscribe((state) => {
        this.initialSize = state.matches
          ? EDGE_PANEL_INITIAL_SIZE_DOUBLE_COLUMN
          : EDGE_PANEL_INITIAL_SIZE_SINGLE_COLUMN;
      });
  }

  create(): void {
    // eslint-disable-next-line no-console
    console.log('open modal');
  }
}
