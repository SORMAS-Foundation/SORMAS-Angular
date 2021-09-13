import { Component, Input } from '@angular/core';
import { HOUR_MINUTE_TIME_FORMAT } from '../../../_constants/common';
import { PathogenTestResultType } from '../../../_constants/enums';
import { PathogenTestDto } from '../../../_models/pathogenTestDto';

@Component({
  selector: 'app-card-sample-pathogen',
  templateUrl: './card-sample-pathogen.component.html',
  styleUrls: ['./card-sample-pathogen.component.scss'],
})
export class CardSamplePathogenComponent {
  @Input() data: PathogenTestDto;
  hourMinuteTimeFormat = HOUR_MINUTE_TIME_FORMAT;
  testResultTypes = PathogenTestResultType;
}
