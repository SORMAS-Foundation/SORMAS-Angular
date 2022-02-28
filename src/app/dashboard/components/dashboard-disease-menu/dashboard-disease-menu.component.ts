import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Disease } from '../../../_constants/enums';
import { Filter } from '../../../_models/common';
import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FilterService } from '../../../_services/filter.service';
import { DISEASES_COLORS_MAP } from '../../../_constants/graphs';

@Component({
  selector: 'app-dashboard-disease-menu',
  templateUrl: './dashboard-disease-menu.component.html',
  styleUrls: ['./dashboard-disease-menu.component.scss'],
  providers: [EnumToKeyValuePipe],
})
export class DashboardDiseaseMenuComponent implements OnInit, OnDestroy {
  currentFilters: Filter[] = [];
  diseases: any[] = [];
  subscriptions: Subscription[] = [];
  intervalTimer: any;
  isIntervalOn: boolean = false;
  selectedIndex: number = 0;

  progressbarValue = 100;
  curSec: number = 0;
  duration: number = 5;
  colorMap: any = DISEASES_COLORS_MAP;
  isSlideshowOn: boolean = false;

  progressBarColor: string;
  defaultProgressBarColor: string = '#515B6B';

  constructor(public filterService: FilterService, public enumToKeyValuePipe: EnumToKeyValuePipe) {
    this.diseases = enumToKeyValuePipe.transform(Disease);

    if (this.diseases.length) {
      const newColor = this.colorMap[this.diseases[0].key];
      this.progressBarColor = newColor || this.defaultProgressBarColor;
    }
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((val) => {
        this.currentFilters = val.filters;
      })
    );
  }

  toggleTimer(seconds: number, isStart: boolean): void {
    if (isStart) {
      this.isSlideshowOn = true;
      const timer$ = interval(1000);

      this.intervalTimer = timer$.subscribe((sec: number) => {
        this.progressbarValue = 100 - (sec * 100) / seconds;
        this.curSec = sec;

        if (this.curSec === seconds) {
          if (this.diseases.length - 1 === this.selectedIndex) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex += 1;
          }
          this.intervalTimer.unsubscribe();
          this.toggleTimer(this.duration, true);
        }
      });
    } else {
      this.isSlideshowOn = false;
      this.intervalTimer.unsubscribe();
    }
  }

  removePrevDiseaseFilter(): void {
    const newFilters: Filter[] = this.currentFilters.filter((f) => f.field !== 'disease');
    this.currentFilters = newFilters;
  }

  tabChange(event: any): void {
    const newColor = this.colorMap[this.diseases[event.index].key];
    this.progressBarColor = newColor || this.defaultProgressBarColor;

    const selectedFilter = { field: 'disease', value: this.diseases[event.index].key };
    this.removePrevDiseaseFilter();
    this.currentFilters.push(selectedFilter);
    this.filterService.setFilters(this.currentFilters);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    if (this.intervalTimer) {
      this.intervalTimer.unsubscribe();
    }
  }
}
