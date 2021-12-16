/* eslint-disable no-param-reassign */
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  addDays,
  addYears,
  getWeek,
  getYear,
  startOfISOWeek,
  format,
  startOfYear,
  differenceInDays,
  endOfISOWeek,
} from 'date-fns';
import {
  BRIEF_DATE_FORMAT,
  COMMON_DATE_FORMAT,
  DATE_TYPE_OPTIONS,
  DateFilterOptions,
  NewCaseDateType,
  Disease,
} from '../../../app.constants';
import { Filter } from '../../../_models/common';
import { RegionDto } from '../../../_models/models';
import { RegionService } from '../../../_services/api/region.service';
import { FilterService } from '../../../_services/filter.service';
import { PERIOD_DATA } from './dashboard-filters-data';

@Component({
  selector: 'app-dashboard-filters',
  templateUrl: './dashboard-filters.component.html',
  styleUrls: ['./dashboard-filters.component.scss'],
})
export class DashboardFiltersComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() showDisease = true;

  form = new FormGroup({});
  filters: Filter[] = [];
  regions: RegionDto[] = [];
  periodOptions: any[] = PERIOD_DATA;
  previousPeriodOptions: any[] = [];
  periodSelected: any;
  previousPeriodSelected: any;
  defaultPeriod = 'THIS_EPI_WEEK';
  dateFilterOption = DateFilterOptions;
  dateTypeOptions = DATE_TYPE_OPTIONS;
  newCaseDateType = NewCaseDateType;
  diseases = Disease;
  weekOptions: any[] = [];

  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService, private regionService: RegionService) {}

  ngAfterViewInit(): void {
    this.applyFilters();
  }

  ngOnInit(): void {
    this.fetchRegions();
    this.generateWeekOptions();
    this.generatePeriodOptions();
    this.initFiltersForm();
    this.setDefaults();
    this.monitorPeriodSelection();
    this.form.get('period')?.setValue(this.defaultPeriod);
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      period: new FormControl(),
      dateFrom: new FormControl(),
      dateTo: new FormControl(),
      previousPeriod: new FormControl(),
      previousDateFrom: new FormControl(),
      previousDateTo: new FormControl(),
      newCaseDateType: new FormControl(),
      region: new FormControl(),
      disease: new FormControl(),
      customDateType: new FormControl(),
      customFrom: new FormControl(),
      customTo: new FormControl(),
      customWeekFrom: new FormControl(),
      customWeekTo: new FormControl(),
    });
  }

  monitorPeriodSelection(): void {
    const periodControl = this.form.get('period');
    const previousPeriodControl = this.form.get('previousPeriod');
    const customDateTypeControl = this.form.get('customDateType');
    const customFromControl = this.form.get('customFrom');
    const customToControl = this.form.get('customTo');
    const customWeekFromControl = this.form.get('customWeekFrom');
    const customWeekToControl = this.form.get('customWeekTo');
    const customControls = [
      customDateTypeControl,
      customFromControl,
      customToControl,
      customWeekFromControl,
      customWeekToControl,
    ];

    if (periodControl) {
      this.subscriptions.push(
        periodControl.valueChanges.subscribe((val) => {
          const period = this.periodOptions.find((item) => item.key === val);
          this.form.get('dateFrom')?.setValue(period.dateFrom);
          this.form.get('dateTo')?.setValue(period.dateTo);
          this.periodSelected = period;
          this.previousPeriodOptions = period?.previous || [];
          this.form.get('previousPeriod')?.setValue(this.previousPeriodOptions[0].key);
        })
      );
    }

    if (previousPeriodControl) {
      this.subscriptions.push(
        previousPeriodControl.valueChanges.subscribe((val) => {
          const period = this.previousPeriodOptions.find((item) => item.key === val);
          this.form.get('previousDateFrom')?.setValue(period.dateFrom);
          this.form.get('previousDateTo')?.setValue(period.dateTo);
          this.previousPeriodSelected = period;
        })
      );
    }

    customControls.forEach((control) => {
      if (control) {
        this.subscriptions.push(
          control.valueChanges.subscribe(() => {
            this.generateCustomPeriodOptions();
            this.form.get('period')?.setValue('CUSTOM');
          })
        );
      }
    });
  }

  setDefaults(): void {
    const today = new Date();
    const week = getWeek(today);
    const end = endOfISOWeek(today);
    const year = getYear(end);
    this.form.get('customDateType')?.setValue('EPI_WEEK');
    this.form.get('customFrom')?.setValue(addDays(today, -7));
    this.form.get('customTo')?.setValue(today);
    this.form.get('customWeekFrom')?.setValue(`${week}-${year}`);
    this.form.get('customWeekTo')?.setValue(`${week}-${year}`);
    this.generateCustomPeriodOptions();
  }

  fetchRegions(): void {
    this.subscriptions.push(
      this.regionService.getAll().subscribe({
        next: (response: any) => {
          this.regions = response.elements;
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  generateWeekOptions(): void {
    let today = new Date();
    const lastYear = addYears(today, -1);
    while (today > lastYear) {
      const weekNumber = getWeek(today);
      const start = startOfISOWeek(today);
      const end = endOfISOWeek(today);
      const year = getYear(end);
      this.weekOptions.push({
        key: `${weekNumber}-${year}`,
        value: `Wk ${weekNumber}-${year} (${format(start, BRIEF_DATE_FORMAT)}-${format(
          end,
          BRIEF_DATE_FORMAT
        )})`,
        start,
        end,
      });
      today = addDays(today, -7);
    }
  }

  getDatesOfWeek(week: number, year: number): any {
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    date.setDate(date.getDate() + (1 - date.getDay()));
    return {
      start: date,
      end: addDays(date, 6),
    };
  }

  generateCustomPeriodOptions(): void {
    const currentPeriod = this.periodOptions.find((item: any) => item.key === 'CUSTOM');
    const before = currentPeriod.previous?.find((obj: any) => obj.key === 'BEFORE');
    const lastYear = currentPeriod.previous?.find((obj: any) => obj.key === 'LAST_YEAR');
    const dateType = this.form.get('customDateType')?.value;
    if (dateType === 'DATE') {
      const fromDate = this.form.get('customFrom')?.value;
      const toDate = this.form.get('customTo')?.value;
      this.setPeriod(currentPeriod, fromDate, toDate);
      const diff = differenceInDays(toDate, fromDate);
      this.setPeriod(before, addDays(fromDate, -diff), addDays(fromDate, -1));
      this.setPeriod(lastYear, addYears(fromDate, -1), addYears(toDate, -1));
      return;
    }
    if (dateType === 'EPI_WEEK') {
      const fromWeek = this.form.get('customWeekFrom')?.value.split('-');
      const toWeek = this.form.get('customWeekTo')?.value.split('-');
      const startWeek = this.getDatesOfWeek(fromWeek[0], fromWeek[1]);
      const endWeek = this.getDatesOfWeek(toWeek[0], toWeek[1]);
      const diff = differenceInDays(startWeek.start, endWeek.start);
      this.setWeekPeriod(currentPeriod, fromWeek[0], fromWeek[1], toWeek[0], toWeek[1]);
      this.setWeekPeriod(
        before,
        getWeek(addDays(startWeek.start, diff - 7)),
        getYear(addDays(startWeek.start, diff - 7)),
        getWeek(addDays(endWeek.start, diff - 7)),
        getYear(addDays(endWeek.start, diff - 7))
      );
      this.setWeekPeriod(lastYear, fromWeek[0], fromWeek[1] - 1, toWeek[0], toWeek[1] - 1);
    }
  }

  generatePeriodOptions(): void {
    const keys: string[] = ['TODAY', 'YESTERDAY', 'THIS_EPI_WEEK', 'LAST_EPI_WEEK', 'THIS_YEAR'];
    const today = new Date();
    const yesterday = addDays(today, -1);
    const todayLastYear = addYears(today, -1);
    const week = getWeek(today);
    const year = getYear(today);
    const weekAgo = addDays(today, -7);
    const lastWeek = getWeek(weekAgo);
    const lastWeekYear = getYear(weekAgo);

    keys.forEach((key: string) => {
      const currentPeriod = this.periodOptions.find((item: any) => item.key === key);
      const before = currentPeriod.previous?.find((obj: any) => obj.key === 'BEFORE');
      const lastYear = currentPeriod.previous?.find((obj: any) => obj.key === 'LAST_YEAR');
      switch (key) {
        case 'TODAY':
          this.setPeriod(currentPeriod, today);
          this.setPeriod(before, yesterday);
          this.setPeriod(lastYear, addYears(today, -1));
          break;
        case 'YESTERDAY':
          this.setPeriod(currentPeriod, yesterday);
          this.setPeriod(before, addDays(yesterday, -1));
          this.setPeriod(lastYear, addYears(yesterday, -1));
          break;
        case 'THIS_EPI_WEEK':
          this.setWeekPeriod(currentPeriod, week, year);
          this.setWeekPeriod(
            before,
            week > 1 ? week - 1 : getWeek(addDays(today, -7)),
            week > 1 ? year : year - 1
          );
          this.setWeekPeriod(lastYear, week, year - 1);
          break;
        case 'LAST_EPI_WEEK':
          this.setWeekPeriod(currentPeriod, lastWeek, lastWeekYear);
          this.setWeekPeriod(
            before,
            lastWeek > 1 ? lastWeek - 1 : getWeek(addDays(lastWeek, -7)),
            lastWeek > 1 ? lastWeekYear : lastWeekYear - 1
          );
          this.setWeekPeriod(lastYear, lastWeek, year - 1);
          break;
        case 'THIS_YEAR':
          this.setPeriod(currentPeriod, startOfYear(today), today);
          this.setPeriod(lastYear, startOfYear(todayLastYear), todayLastYear);
          break;
        default:
      }
    });
  }

  setPeriod(obj: any, start: Date, end?: Date): void {
    if (!obj) {
      return;
    }
    obj.dateFrom = start;
    obj.dateTo = end ?? start;
    obj.displayValue = end
      ? `${format(start, COMMON_DATE_FORMAT)} - ${format(end, COMMON_DATE_FORMAT)}`
      : `${format(start, COMMON_DATE_FORMAT)}`;
  }

  setWeekPeriod(
    obj: any,
    startWeek: number,
    startYear: number,
    endWeek?: number,
    endYear?: number
  ): void {
    if (!obj) {
      return;
    }
    const firstWeek = this.getDatesOfWeek(startWeek, startYear);
    const lastWeek = endWeek && endYear ? this.getDatesOfWeek(endWeek, endYear) : null;
    obj.dateFrom = firstWeek?.start;
    obj.dateTo = lastWeek?.end || firstWeek?.end;
    obj.displayValue = endWeek
      ? `Wk ${startWeek}-${startYear} - Wk ${endWeek}-${endYear}`
      : `Wk ${startWeek}-${startYear} (${format(firstWeek?.start, BRIEF_DATE_FORMAT)} - ${format(
          firstWeek?.end,
          BRIEF_DATE_FORMAT
        )})`;
  }

  onPeriodSelected(event: any): void {
    this.form.get('period')?.setValue(event);
  }

  onPreviousPeriodSelected(event: any): void {
    this.form.get('previousPeriod')?.setValue(event);
  }

  resetFilters(): void {
    this.setDefaults();
    this.form.get('region')?.setValue(null);
    this.form.get('newCaseDateType')?.setValue(null);
    this.form.get('period')?.setValue(this.defaultPeriod);
    this.applyFilters();
  }

  applyFilters(): void {
    const relevantValues = (({
      dateFrom,
      dateTo,
      previousDateFrom,
      previousDateTo,
      newCaseDateType,
      region,
    }) => ({
      dateFrom,
      dateTo,
      previousDateFrom,
      previousDateTo,
      newCaseDateType,
      region,
    }))(this.form.value);
    const filters: any[] = [];
    Object.entries(relevantValues).forEach(([field, value]) => {
      if (value !== null) {
        filters.push({ field, value });
      }
    });
    this.filterService.setFilters(filters);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
