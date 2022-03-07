import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { addDays, differenceInDays, isAfter } from 'date-fns';
import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { CASE_FILTERS_FORM_ID, PERIOD_PICKER_MAX_RANGE } from '../../app.constants';
import { Filter } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';
import { NotificationService } from '../../_services/notification.service';

@Component({
  selector: 'app-period-picker',
  templateUrl: './period-picker.component.html',
  styleUrls: ['./period-picker.component.scss'],
})
export class PeriodPickerComponent implements OnInit, OnDestroy {
  @Input() from: Date;
  @Input() to: Date;
  @Input() maxRange = PERIOD_PICKER_MAX_RANGE;

  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(
    private filterService: FilterService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.initFiltersForm();
    this.setFilters();
  }

  initFiltersForm(): void {
    this.form = new FormGroup({
      from: new FormControl(this.from, Validators.required),
      to: new FormControl(this.to, Validators.required),
    });
    this.subscriptions.push(
      this.form.valueChanges
        .pipe(debounceTime(100))
        .pipe(filter(() => this.validateRange()))
        .subscribe(() => this.setFilters())
    );
  }

  validateRange(): boolean {
    const { from, to } = this.form.value;
    const duration = differenceInDays(to, from) + 1;
    const invalid = isAfter(from, to) || duration > this.maxRange;
    const controlFrom = this.form.get('from');
    const controlTo = this.form.get('to');
    controlFrom?.setErrors(null);
    controlTo?.setErrors(null);
    if (invalid) {
      controlFrom?.setErrors({ outOfRange: { value: controlFrom?.value } });
      controlFrom?.setErrors({ outOfRange: { value: controlTo?.value } });
      this.notificationService.error(
        this.translateService
          .instant('strings.messageSelectedPeriodTooLong')
          .replace('%d', this.maxRange)
      );
    }
    return !invalid;
  }

  setFilters(): void {
    const { from, to } = this.form.value;
    const duration = differenceInDays(to, from) + 1;
    const filters: Filter[] = [
      {
        field: 'referenceDate',
        value: from,
      },
      {
        field: 'interval',
        value: duration,
      },
    ];
    this.filterService.setFilters(filters, CASE_FILTERS_FORM_ID);
  }

  movePeriod(forward?: boolean): void {
    const { from, to } = this.form.value;
    const duration = differenceInDays(to, from) + 1;
    this.form.get('from')?.setValue(addDays(from, forward ? duration : -duration));
    this.form.get('to')?.setValue(addDays(to, forward ? duration : -duration));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
