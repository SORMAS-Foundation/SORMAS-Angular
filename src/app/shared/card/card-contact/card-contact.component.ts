import { Component, Input } from '@angular/core';
import { IconsMap } from '../../../_constants/icons';
import { PersonContactDetailDto } from '../../../_models/personContactDetailDto';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss'],
})
export class CardContactComponent {
  @Input() data: PersonContactDetailDto;
  icons = IconsMap;

  getIcon(): string {
    return this.icons[this.data.personContactDetailType as keyof typeof IconsMap];
  }

  getName(): string {
    let name = this.data.person?.caption;
    if (this.data.thirdParty) {
      name = this.data.thirdPartyName;
    }
    return name || '';
  }
}
