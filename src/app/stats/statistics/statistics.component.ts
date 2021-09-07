import { Component } from '@angular/core';
import { HEADER_HEIGHT, HEADING_TABS_HEIGHT } from '../../app.constants';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  topGap = HEADER_HEIGHT + HEADING_TABS_HEIGHT;
}
