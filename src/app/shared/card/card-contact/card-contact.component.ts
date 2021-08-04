import { Component, Input, OnChanges } from '@angular/core';
import { IconsMap } from '../../../_constants/icons';
import { PersonContactDetailDto } from '../../../_models/personContactDetailDto';

@Component({
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss'],
})
export class CardContactComponent implements OnChanges {
  @Input() data: PersonContactDetailDto;
  icons = IconsMap;
  personName: string;
  personIcon: string;

  ngOnChanges(): void {
    this.personName = this.getName();
    this.personIcon = this.getIcon();
  }

  getIcon(): string {
    return this.data ? this.icons[this.data.personContactDetailType as keyof typeof IconsMap] : '';
  }

  getName(): string {
    let name = this.data?.person?.caption;
    if (this.data?.thirdParty) {
      name = this.data.thirdPartyName;
    }
    return name || '';
  }
}
