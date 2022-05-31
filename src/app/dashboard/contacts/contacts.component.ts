import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE, MapType } from '../../_constants/common';
import { VIEW_OPTIONS, ViewOptions, Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
  dashboardEpidemiologicalCurveType = DASHBOARD_EPIDEMIOLOGICAL_CURVE_TYPE;
  fullscreenEpi = false;
  fullScreenMap = false;
  showTransmissionChain = false;
  MapType = MapType;
  filters: Filter[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getFilters().subscribe((response) => {
        this.filters = response.filters;
      })
    );
  }

  onEpiCurveViewChange(event: ViewOptions): void {
    this.fullscreenEpi = event === VIEW_OPTIONS.SECONDARY;
  }

  onMapViewChange(event: ViewOptions): void {
    this.fullScreenMap = event === VIEW_OPTIONS.SECONDARY;
  }

  onTransmissionChainViewChange(event: ViewOptions): void {
    this.showTransmissionChain = event === VIEW_OPTIONS.SECONDARY;
    setTimeout(() => {
      this.filterService.setFilters(this.filters);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
