import { Component } from '@angular/core';
import { CaseService } from '../../../_services/api/case.service';
import { FormElementBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-calculate-case-classification',
  templateUrl: './calculate-case-classification.component.html',
  styleUrls: ['./calculate-case-classification.component.scss'],
})
export class CalculateCaseClassificationComponent {
  config: FormElementBase<any>;

  constructor(private caseService: CaseService) {}

  calculate(): void {
    this.caseService.calculateClassification(this.config.value).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {},
    });
  }
}
