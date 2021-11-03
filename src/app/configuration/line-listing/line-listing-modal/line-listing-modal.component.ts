import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Filter } from '../../../_models/common';
import { DatepickerHeaderTodayComponent } from '../../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { ListingDto } from '../../../_models/listingDto';
import { NotificationService } from '../../../_services/notification.service';
import { ListingService } from '../../../_services/api/listing.service';

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
    private listingService: ListingService,
    public translateService: TranslateService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
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
    const filters = [filter];
    this.listingService.getAll(null, null, filters, false).subscribe({
      next: () => {},
      error: () => {},
      complete: () => {},
    });
  }

  enableDisableAll(mode: boolean): void {
    this.data.listings.forEach((listing: ListingDto) => {
      if (mode && !listing.enabled) {
        // eslint-disable-next-line no-param-reassign
        listing.endDate = new Date();
      }
      if (!mode) {
        // eslint-disable-next-line no-param-reassign
        listing.endDate = null;
      }
      // eslint-disable-next-line no-param-reassign
      listing.enabled = mode;
    });
  }

  setEndDatForAll(): void {
    if (this.form.controls.endDateAll.value) {
      this.data.listings.forEach((listing: ListingDto) => {
        // eslint-disable-next-line no-param-reassign
        listing.endDate = this.form.controls.endDateAll.value;
      });
    } else {
      this.notificationService.error(this.translateService.instant('pleaseSetEndDate'));
    }
  }

  save(): void {
    this.dialogRef.close({
      listings: this.data.listings,
    });
  }

  translateFunc(): string {
    if (typeof this.data.regionId === 'undefined') {
      return this.translateService
        .instant('strings.infoLineListingConfigurationNationEdit')
        .replace('%s', this.data.disease);
    }
    return this.translateService
      .instant('strings.infoLineListingConfigurationRegionEdit')
      .replace('%s', this.data.disease)
      .replace('%s', this.data.regionName);
  }
}
