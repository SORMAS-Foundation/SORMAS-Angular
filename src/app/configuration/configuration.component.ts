import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EntityLink } from '../_constants/common';
import { SendResourceService } from '../_services/send-resource.service';
import { ListingDto } from '../_models/listingDto';

const LINKS: EntityLink[] = [
  { link: '/configuration/outbreaks', title: 'Outbreaks' },
  { link: '/configuration/continents', title: 'Continents' },
  { link: '/configuration/subcontinents', title: 'Subcontinents' },
  { link: '/configuration/countries', title: 'Countries' },
  { link: '/configuration/regions', title: 'Regions' },
  { link: '/configuration/districts', title: 'Districts' },
  { link: '/configuration/communities', title: 'Communities' },
  { link: '/configuration/facilities', title: 'Facilities' },
  { link: '/configuration/entry-points', title: 'Points of entry' },
  { link: '/configuration/population', title: 'Population' },
  { link: '/configuration/line-listing', title: 'Line listing' },
  { link: '/configuration/document-templates', title: 'Document templates' },
];

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnDestroy {
  links: EntityLink[] = LINKS;

  private subscription: Subscription[] = [];
  public regionName: string;

  constructor(private router: Router, private sendResourceService: SendResourceService) {
    this.subscription.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === 'line-listing-component') {
          this.regionName = this.getRegionName(
            response.resource.lineListingArray,
            response.resource.regionId
          );
        }
      })
    );
  }

  getRegionName(lineListingArray: any, regionId: string): any {
    let nameTmp = null;
    lineListingArray.forEach((item: any) => {
      const listingTmp = item.listings.find(
        (listing: ListingDto) => listing.regionUuid === regionId
      );
      if (listingTmp) {
        nameTmp = listingTmp.name;
      }
    });

    return nameTmp;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
