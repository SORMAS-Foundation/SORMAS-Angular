import { Component, Input } from '@angular/core';
import { ContactClassification, ContactStatus, Disease } from '../../../_constants/enums';
import { ContactClassificationIcons } from '../../../_constants/icons';
import { ContactDto } from '../../../_models/contactDto';

@Component({
  selector: 'app-card-person-contact',
  templateUrl: './card-person-contact.component.html',
  styleUrls: ['./card-person-contact.component.scss'],
})
export class CardPersonContactComponent {
  @Input() data: ContactDto;
  contactClassificationIcons = ContactClassificationIcons;
  contactClassification = ContactClassification;
  contactStatus = ContactStatus;
  disease = Disease;
}
