import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EntityLink, SentResourceTypes } from '../_constants/common';
import { SendResourceService } from '../_services/send-resource.service';
import { RegionDto } from '../_models/regionDto';

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
  public regionName: string | null;

  constructor(private sendResourceService: SendResourceService) {
    this.subscription.push(
      this.sendResourceService.getResource().subscribe((response: any) => {
        if (response.fromComponent === SentResourceTypes.LINE_LISTING_DATA) {
          const regionTmp = response.resource.regions.find(
            (region: RegionDto) => region.uuid === response.resource.regionId
          );
          if (regionTmp) {
            this.regionName = regionTmp.name;
          } else {
            this.regionName = null;
          }
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
