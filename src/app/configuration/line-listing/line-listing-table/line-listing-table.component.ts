import { Component, Input, OnInit } from '@angular/core';
import { ListingDto } from '../../../_models/listingDto';
import { DatepickerHeaderTodayComponent } from '../../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { DEFAULT_DATE_FORMAT } from '../../../_constants/common';

@Component({
  selector: 'app-line-listing-table',
  templateUrl: './line-listing-table.component.html',
  styleUrls: ['./line-listing-table.component.scss'],
})
export class LineListingTableComponent implements OnInit {
  header = DatepickerHeaderTodayComponent;
  defaultDateFormat = DEFAULT_DATE_FORMAT;

  @Input() listings: ListingDto[];
  @Input() regionId: string;

  displayedColumns: string[];

  ngOnInit(): void {
    if (!this.regionId) {
      this.displayedColumns = ['enabled', 'name', 'districtName', 'endDate'];
    } else {
      this.displayedColumns = ['enabled', 'districtName', 'endDate'];
    }
  }

  triggerDatePicker(picker: any): void {
    picker.open();
  }

  onChangeCheckbox(element: any): void {
    if (element.enabled) {
      // eslint-disable-next-line no-param-reassign
      element.endDate = new Date(Date.now() + 6.048e8 * 3);
    } else {
      // eslint-disable-next-line no-param-reassign
      element.endDate = null;
    }
  }
}
