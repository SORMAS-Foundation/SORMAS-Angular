import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classification-rules',
  templateUrl: './classification-rules.component.html',
  styleUrls: ['./classification-rules.component.scss'],
})
export class ClassificationRulesComponent {
  @Input() disease = 'CORONAVIRUS';
}
