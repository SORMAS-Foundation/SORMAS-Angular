import { Component, Input } from '@angular/core';
import { CaseClassificationIcons, CaseOutcomeIcons } from '../../_constants/icons';
import { InfoBarType, InfoBarTypeOptions } from '../../_models/common';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss'],
})
export class InfoBarComponent {
  @Input() data: any;
  @Input() type: InfoBarType;

  caseOutcomeIcons = CaseOutcomeIcons;
  caseClassificationIcons = CaseClassificationIcons;
  infoBarOptions = InfoBarTypeOptions;

  getOutcomeIcon(key: string): string {
    return this.caseOutcomeIcons[key as keyof typeof CaseOutcomeIcons];
  }

  getClassificationIcon(key: string): string {
    return this.caseClassificationIcons[key as keyof typeof CaseClassificationIcons];
  }
}
