import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter } from '../../../_models/common';
import { FilterService } from '../../../_services/filter.service';
import { DatepickerHeaderTodayComponent } from '../../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { ListingDto } from '../../../_models/listingDto';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-line-listing-modal',
  templateUrl: './line-listing-modal.component.html',
  styleUrls: ['./line-listing-modal.component.scss'],
})
export class LineListingModalComponent implements OnInit {
  form = new FormGroup({});
  header = DatepickerHeaderTodayComponent;
  endDateAll: any;

  constructor(
    public dialogRef: MatDialogRef<LineListingModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private filterService: FilterService,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      listingSearch: new FormControl(),
      endDateAll: new FormControl(),
    });
  }

  onFormChange(): void {
    this.filtersToArray();
  }

  filtersToArray(): void {
    const filter: Filter = {
      field: 'listingSearch',
      value: this.form.value.listingSearch,
    };
    this.filterService.setFilters([filter]);
  }

  enableDisableAll(mode: boolean): void {
    this.data.listings.forEach((listing: ListingDto) => {
      // eslint-disable-next-line no-param-reassign
      listing.enabled = mode;
    });
  }

  setEndDatForAll(): void {
    if (this.form.controls['endDateAll'].value) {
      this.data.listings.forEach((listing: ListingDto) => {
        // eslint-disable-next-line no-param-reassign
        listing.endDate = this.form.controls['endDateAll'].value;
      });
    } else {
      this.notificationService.error('Please set an end date');
    }
  }

  onChange(): void {

  }
}
