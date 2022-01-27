import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { addDays } from 'date-fns';
import { distinctUntilChanged } from 'rxjs/operators';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { FORM_DATA_MSERS_ADD } from './mser-add-form-data';
import { MSERS_ADD_FORM_ID } from '../../app.constants';
import { AggregateReportService } from '../../_services/api/aggregate-report.service';
import { HelperService } from '../../_services/helper.service';

@Component({
  selector: 'app-mser-add',
  templateUrl: './mser-add.component.html',
  styleUrls: ['./mser-add.component.scss'],
})
export class MserAddComponent implements OnInit, AfterViewInit, OnDestroy {
  public formData: FormBase<any>[] = FORM_DATA_MSERS_ADD;
  formId = MSERS_ADD_FORM_ID;
  currentDate = new Date();
  subscriptions: Subscription[] = [];

  @ViewChild('form') dynamicForm: any;

  constructor(public msersService: AggregateReportService, private helperService: HelperService) {}

  ngOnInit(): void {
    this.updateOptions('msers', 'year', this.helperService.getYears(2000));
  }

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const controlEpiWeekFilter = form.get('epiWeekFilter');
      const controlEpiWeek = form.get('epiWeek');
      const controlYear = form.get('year');

      this.subscriptions.push(
        controlEpiWeekFilter.valueChanges.pipe(distinctUntilChanged()).subscribe((val: string) => {
          if (val === 'SPECIFY_WEEK') {
            controlEpiWeek.enable();
            controlYear.enable();
          } else {
            controlYear.disable();
            controlYear.setValue(this.currentDate.getFullYear());
            setTimeout(() => {
              const week = this.helperService.generateWeekForDate(
                val === 'THIS_WEEK' ? this.currentDate : addDays(this.currentDate, -7)
              );
              controlEpiWeek.disable();
              controlEpiWeek.setValue(week.key);
            });
          }
        })
      );

      setTimeout(() => {
        controlEpiWeekFilter.setValue('THIS_WEEK');
      });
    }
  }

  updateOptions(id: string, field: string, options: any): void {
    const section = this.formData.find((item) => {
      return item.id === id;
    });
    const dayField = (section?.fields as any[]).find((item) => {
      return item.key === field;
    });
    dayField.options = options;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
