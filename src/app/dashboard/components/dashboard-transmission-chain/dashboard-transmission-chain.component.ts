import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewOptions, VIEW_OPTIONS } from '../../../_models/common';
import { FilterService } from '../../../_services/filter.service';

@Component({
  selector: 'app-dashboard-transmission-chain',
  templateUrl: './dashboard-transmission-chain.component.html',
  styleUrls: ['./dashboard-transmission-chain.component.scss'],
})
export class DashboardTransmissionChainComponent implements OnInit, OnDestroy {
  disease: string | null = null;
  showTransmissionChain = false;

  @Output() viewModeUpdate: EventEmitter<ViewOptions> = new EventEmitter();

  private subscriptions: Subscription = new Subscription();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.filterService.getFilters().subscribe((response) => {
        const diseaseFilter = response.filters.find((filter: any) => filter.field === 'disease');
        this.disease = diseaseFilter?.value ?? null;
      })
    );
  }

  toggleTransmissionChain(status: boolean): void {
    this.showTransmissionChain = status;
    this.viewModeUpdate.emit(status ? VIEW_OPTIONS.SECONDARY : VIEW_OPTIONS.PRIMARY);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
