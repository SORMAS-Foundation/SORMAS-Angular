import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import addDays from 'date-fns/addDays';
import { Subscription } from 'rxjs';
import { WEEKLY_REPORT_FILTERS_FORM_ID } from '../../app.constants';
import { FilterService } from '../../_services/filter.service';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-reports-filters',
  templateUrl: './reports-filters.component.html',
  styleUrls: ['./reports-filters.component.scss'],
})
export class ReportsFiltersComponent implements OnInit, OnDestroy {
  form: FormGroup;
  today = new Date();
  lastWeek: any;
  yearsOptions: any[] = [];
  epiWeeksOptions: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService, private helperService: HelperService) {}

  ngOnInit(): void {
    const thisWeek = this.helperService.generateWeekForDate(this.today);
    this.lastWeek = this.helperService.generateWeekForDate(addDays(this.today, -7));
    this.yearsOptions = this.helperService.getYears().reverse();
    this.initFiltersForm();
    this.watchFields();
    this.form.get('year')?.setValue(this.today.getFullYear());
    this.form.get('epiWeek')?.setValue(thisWeek.key);
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      year: new FormControl(),
      epiWeek: new FormControl(),
    });
  }

  watchFields(): void {
    const controlYear = this.form.get('year');
    const controlEpiWeek = this.form.get('epiWeek');

    if (controlYear) {
      this.subscriptions.push(
        controlYear.valueChanges.subscribe((year) => {
          this.subscriptions.push(
            this.helperService.getEpiWeeksForYear([{ value: year }]).subscribe((result) => {
              this.epiWeeksOptions = result;
            })
          );
        })
      );
    }

    if (controlEpiWeek) {
      this.subscriptions.push(
        controlEpiWeek.valueChanges.subscribe((epiWeek) => {
          this.filterService.setFilters(
            [
              {
                field: 'epiWeek',
                value: epiWeek,
              },
            ],
            WEEKLY_REPORT_FILTERS_FORM_ID
          );
        })
      );
    }
  }

  useLastWeek(): void {
    this.form.get('year')?.setValue(this.today.getFullYear());
    this.form.get('epiWeek')?.setValue(this.lastWeek.key);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
