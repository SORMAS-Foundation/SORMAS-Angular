import { Component, Input } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';

@Component({
  selector: 'app-card-document-template',
  templateUrl: './card-document-template.component.html',
  styleUrls: ['./card-document-template.component.scss'],
})
export class CardDocumentTemplateComponent {
  @Input() data: any;
  dateCardType = DateCardType;
}
