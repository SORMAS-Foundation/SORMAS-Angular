import { Component, Input } from '@angular/core';
import { CaseClassification, Disease } from '../../../_constants/enums';
import { CaseClassificationIcons } from '../../../_constants/icons';
import { CaseDataDto } from '../../../_models/caseDataDto';

@Component({
  selector: 'app-card-person-case',
  templateUrl: './card-person-case.component.html',
  styleUrls: ['./card-person-case.component.scss'],
})
export class CardPersonCaseComponent {
  @Input() data: CaseDataDto;
  caseClassificationIcons = CaseClassificationIcons;
  caseClassification = CaseClassification;
  disease = Disease;
}
