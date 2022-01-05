import { Component, Input } from '@angular/core';
import { format, isSameDay } from 'date-fns';
import { COMMON_DATE_FORMAT } from '../../../app.constants';
import { Filter } from '../../../_models/common';

@Component({
  selector: 'app-dashboard-difference-cases',
  templateUrl: './dashboard-difference-cases.component.html',
  styleUrls: ['./dashboard-difference-cases.component.scss'],
})
export class DashboardDifferenceCasesComponent {
  @Input() data: any;
  private _filters: Filter[];
  @Input() set filters(raw: Filter[]) {
    this._filters = raw;
    this.setPeriod();
  }
  get filters(): Filter[] {
    return this._filters;
  }

  period: string;
  previousPeriod: string;

  setPeriod(): void {
    const dateFrom = this.filters.find((item) => item.field === 'dateFrom')?.value;
    const dateTo = this.filters.find((item) => item.field === 'dateTo')?.value;
    const previousDateFrom = this.filters.find((item) => item.field === 'previousDateFrom')?.value;
    const previousDateTo = this.filters.find((item) => item.field === 'previousDateTo')?.value;
    this.period =
      !dateTo || isSameDay(dateFrom, dateTo)
        ? format(dateFrom, COMMON_DATE_FORMAT)
        : `${format(dateFrom, COMMON_DATE_FORMAT)} - ${format(dateTo, COMMON_DATE_FORMAT)}`;
    this.previousPeriod =
      !previousDateTo || isSameDay(previousDateFrom, previousDateTo)
        ? format(previousDateFrom, COMMON_DATE_FORMAT)
        : `${format(previousDateFrom, COMMON_DATE_FORMAT)} - ${format(
            previousDateTo,
            COMMON_DATE_FORMAT
          )}`;
  }
}
