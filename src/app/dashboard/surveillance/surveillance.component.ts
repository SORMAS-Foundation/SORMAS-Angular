import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-surveillance',
  templateUrl: './surveillance.component.html',
  styleUrls: ['./surveillance.component.scss'],
})
export class SurveillanceComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((filters) => {
        // eslint-disable-next-line no-console
        console.log(filters);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
