import { Component, Input } from '@angular/core';
import { AdditionalTestDto } from '../../../../_models/additionalTestDto';

@Component({
  selector: 'app-card-sample-additional',
  templateUrl: './card-sample-additional.component.html',
  styleUrls: ['./card-sample-additional.component.scss'],
})
export class CardSampleAdditionalComponent {
  @Input() data: AdditionalTestDto;
}
