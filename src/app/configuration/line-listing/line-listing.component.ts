import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../_services/api/listing.service';
import { RegionService } from '../../_services/api/region.service';
import { Disease } from '../../_constants/enums';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { NotificationService } from '../../_services/notification.service';
import { SendResourceService } from '../../_services/send-resource.service';

const pipe = new EnumToKeyValuePipe();

@Component({
  selector: 'app-line-listing',
  templateUrl: './line-listing.component.html',
  styleUrls: ['./line-listing.component.scss'],
})
export class LineListingComponent implements OnInit {
  public lineListingArray: any;
  public regions: any[] = [];
  public regionId: string;
  public optionsDisease = pipe.transform(Disease);
  public selectedDisease: any;

  constructor(
    private listingService: ListingService,
    private regionService: RegionService,
    private activeRoute: ActivatedRoute,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService
  ) {}

  ngOnInit(): void {
    const urlParams = this.activeRoute.snapshot.params;
    if (typeof urlParams.regionId !== 'undefined') {
      this.regionId = urlParams.regionId;
    }

    forkJoin({
      getAllListings: this.listingService.getAll(null, null, null, false),
      getAllRegions: this.regionService.getAll(null, null, null, false),
    }).subscribe(({ getAllListings, getAllRegions }) => {
      this.lineListingArray = getAllListings;
      this.regions = getAllRegions.elements;

      this.sendResourceService.setResource(
        { regionId: this.regionId, regions: this.regions },
        'line-listing-component'
      );
    });
  }

  getOptionsDiseaseProcessed(): any {
    return this.optionsDisease.filter(
      (disease) => !this.lineListingArray.filter((item: any) => disease.key === item.disease).length
    );
  }

  addLineListingItem(): void {
    if (this.selectedDisease) {
      this.lineListingArray.push({
        disease: this.selectedDisease,
        listings: [],
      });
    } else {
      this.notificationService.error('Please select a disease');
    }
  }
}
