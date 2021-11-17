import { Component, Input, OnInit } from '@angular/core';
import { DateCardType } from '../../../_constants/enums';

@Component({
  selector: 'app-card-case-event',
  templateUrl: './card-case-event.component.html',
  styleUrls: ['./card-case-event.component.scss'],
})
export class CardCaseEventComponent implements OnInit {
  @Input() data: any = {};
  dateCardType = DateCardType;

  ngOnInit(): void {
    const result: string[] = [];
    const fields = ['address', 'region', 'district', 'community'];
    const location = this.data?.eventLocation;
    if (location) {
      fields.forEach((field) => {
        if (location[field]) {
          result.push(location[field]);
        }
      });
      this.data.address = result.join(', ');
    }
  }
}
