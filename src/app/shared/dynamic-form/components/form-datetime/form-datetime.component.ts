import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBaseComponent } from '../form-base.component';
import { FormElementBase } from '../../types/form-element-base';
import { DatepickerHeaderTodayComponent } from '../datepicker-header-today/datepicker-header-today.component';
import { FormActionsService } from '../../../../_services/form-actions.service';
import { HelperService } from '../../../../_services/helper.service';
import { FormElementControlService } from '../../../../_services/form-element-control.service';

@Component({
  selector: 'app-form-datetime',
  templateUrl: './form-datetime.component.html',
  styleUrls: ['./form-datetime.component.scss'],
})
export class FormDatetimeComponent
  extends FormBaseComponent
  implements OnInit, AfterViewInit, OnDestroy {
  config: FormElementBase<string>;
  group: FormGroup;
  form: FormGroup;
  options: any[] = [];
  subscription: Subscription[] = [];
  header = DatepickerHeaderTodayComponent;

  constructor(
    formActionsService: FormActionsService,
    private helperService: HelperService,
    private formElementControlService: FormElementControlService
  ) {
    super(formActionsService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    const validations = this.config.validation
      ? this.formElementControlService.getValidators(this.config.validation)
      : null;
    this.form = new FormGroup({
      date: new FormControl(null, validations),
      time: new FormControl(),
    });
    this.updateFields(this.config.value);
    this.updateTimeOptions();
  }

  ngAfterViewInit(): void {
    const control = this.group.controls[this.config.key];

    if (!control) {
      return;
    }

    this.subscription.push(control.valueChanges.subscribe((data: any) => this.updateFields(data)));

    this.subscription.push(
      this.form.valueChanges.subscribe(({ date, time }) => {
        if (!date) {
          return;
        }

        if (time) {
          const [hours, minutes] = time.split(':');
          date.setHours(hours, minutes);
        }

        control.setValue(date);
      })
    );
  }

  updateFields(date: any): void {
    let time = null;
    if (date instanceof Date) {
      const hours = `0${date.getHours()}`.slice(-2);
      const minutes = `0${date.getMinutes()}`.slice(-2);
      time = `${hours}:${minutes}`;
    }
    this.form.patchValue({ date, time }, { emitEvent: false });
  }

  updateTimeOptions(): void {
    const { time } = this.form.value;
    const result = this.helperService.getTimeOptions();
    if (time) {
      result.push({
        key: time,
        value: time,
      });
      result.sort((a, b) => a.key.localeCompare(b.key));
    }
    this.options = result;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
