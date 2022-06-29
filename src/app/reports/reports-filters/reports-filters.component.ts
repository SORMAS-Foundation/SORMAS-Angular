import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
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
export class ReportsFiltersComponent implements OnInit, OnDestroy, AfterViewInit {
  form: UntypedFormGroup;
  today = new Date();
  lastWeek: any;
  yearsOptions: any[] = [];
  epiWeeksOptions: any[] = [];
  subscriptions: Subscription[] = [];

  constructor(private filterService: FilterService, private helperService: HelperService) {}

  ngOnInit(): void {
    this.lastWeek = this.helperService.generateWeekForDate(addDays(this.today, -7));
    this.yearsOptions = this.helperService.getYears().reverse();
    this.initFiltersForm();
    this.watchFields();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.useLastWeek();
    });
  }

  initFiltersForm(): void {
    this.form = new UntypedFormGroup({
      year: new UntypedFormControl(),
      epiWeek: new UntypedFormControl(),
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
