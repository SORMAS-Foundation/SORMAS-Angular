import { Component, Input, OnInit } from '@angular/core';
import { ListingDto } from '../../../_models/listingDto';
import { DatepickerHeaderTodayComponent } from '../../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';

@Component({
  selector: 'app-line-listing-table',
  templateUrl: './line-listing-table.component.html',
  styleUrls: ['./line-listing-table.component.scss']
})
export class LineListingTableComponent implements OnInit {
  header = DatepickerHeaderTodayComponent;

  @Input() listings: ListingDto[];
  @Input() regionId: string;

  displayedColumns: string[];

  constructor() {}

  ngOnInit(): void {
    if (!this.regionId) {
      this.displayedColumns = ['enabled', 'name', 'districtName', 'endDate'];
    } else {
      this.displayedColumns = ['enabled', 'districtName', 'endDate'];
    }
  }

  onChangeCheckbox(): void {

  }

}
