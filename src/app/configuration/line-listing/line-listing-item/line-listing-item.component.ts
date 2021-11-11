import { Component, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ListingDto } from '../../../_models/listingDto';
import { RegionDto } from '../../../_models/regionDto';
import { NotificationService } from '../../../_services/notification.service';
import { MODAL_MEDIUM_WIDTH } from '../../../_constants/common';
import { LineListingModalComponent } from '../line-listing-modal/line-listing-modal.component';
import { ListingService } from '../../../_services/api/listing.service';

@Component({
  selector: 'app-line-listing-item',
  templateUrl: './line-listing-item.component.html',
  styleUrls: ['./line-listing-item.component.scss'],
})
export class LineListingItemComponent implements OnDestroy {
  @Input() listings: ListingDto[];
  @Input() regions: RegionDto[];
  @Input() regionId: string;
  @Input() disease: string;

  private subscription: Subscription[] = [];

  constructor(
    private dialog: MatDialog,
    private notificationService: NotificationService,
    public translateService: TranslateService,
    private listingService: ListingService
  ) {}

  getSelectedDistrictsNoForRegion(region: RegionDto): number {
    return this.listings.filter((listing) => listing.regionUuid === region.uuid).length;
  }

  getDistrictsForRegion(): ListingDto[] {
    return this.listings.filter((listing) => listing.regionUuid === this.regionId);
  }

  openLineListingModal(): void {
    const filters = [
      {
        field: 'disease',
        value: this.disease,
      },
    ];

    if (this.regionId) {
      filters.push({
        field: 'region',
        value: this.regionId,
      });
    }

    this.listingService.getAll(null, null, filters, false).subscribe({
      next: (response: any) => {
        const regionTmp = this.regions.find((region) => region.uuid === this.regionId);
        let regionNameTmp;
        if (regionTmp) {
          regionNameTmp = regionTmp.name;
        }

        const data = {
          listings: response[0].listings,
          regionId: this.regionId,
          regionName: regionNameTmp,
          disease: this.disease,
        };

        const dialogRef = this.dialog.open(LineListingModalComponent, {
          width: MODAL_MEDIUM_WIDTH,
          data,
        });

        this.subscription.push(
          dialogRef.afterClosed().subscribe((result) => {
            if (result) {
              this.listingService.add(result.listings).subscribe({
                next: () => {
                  this.notificationService.success(
                    this.translateService.instant('addedSuccessfully')
                  );
                },
                error: () => {},
                complete: () => {},
              });
            }
          })
        );
      },
      error: () => {},
      complete: () => {},
    });
  }

  disableAllLineListings(): void {
    let message;
    if (!this.regionId) {
      message = this.translateService.instant('strings.confirmationDisableAllLineListingNational');
    } else {
      message = this.translateService.instant('strings.confirmationDisableAllLineListingRegion');
    }
    this.notificationService
      .prompt({
        title: this.translateService.instant('strings.headingDisableLineListing'),
        message,
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionConfirm'),
      })
      .subscribe((result) => {
        if (result) {
          if (result === 'CONFIRM') {
            this.listingService.deleteAll(this.disease, this.regionId).subscribe({
              next: () => {
                this.notificationService.success(
                  this.translateService.instant('deletedSuccessfully')
                );
              },
              error: () => {},
              complete: () => {},
            });
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
