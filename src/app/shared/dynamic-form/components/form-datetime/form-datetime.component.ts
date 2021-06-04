import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormBaseComponent } from '../form-base.component';
import { FormElementBase } from '../../types/form-element-base';
import { FormActionsService } from '../../../../_services/form-actions.service';

@Component({
  selector: 'app-form-datetime',
  templateUrl: './form-datetime.component.html',
  styleUrls: ['./form-datetime.component.scss'],
})
export class FormDatetimeComponent extends FormBaseComponent implements AfterViewInit, OnDestroy {
  config: FormElementBase<string>;
  group: FormGroup;
  form: FormGroup;
  options: any[] = [];
  subscription: Subscription[] = [];

  constructor(public formActionsService: FormActionsService, formBuilder: FormBuilder) {
    super(formActionsService);
    this.options = this.timeOptions();
    this.form = formBuilder.group({
      date: '',
      time: '',
    });
  }

  ngAfterViewInit(): void {
    this.subscription.push(
      this.form.valueChanges.subscribe(({ date, time }) => {
        if (!date) {
          return;
        }

        if (time) {
          const [hours, minutes] = time.split(':');
          date.setHours(hours, minutes);
        }

        const field: any = {};
        field[this.config.key] = date;

        this.group.patchValue(field);
      })
    );
  }

  timeOptions(): any[] {
    const options = [];

    for (let i = 0; i < 24; i += 1) {
      for (let j = 0; j < 60; j += 15) {
        const hour = i.toLocaleString('en', { minimumIntegerDigits: 2 });
        const minute = j.toLocaleString('en', { minimumIntegerDigits: 2 });
        const time = `${hour}:${minute}`;
        options.push({
          key: time,
          value: time,
        });
      }
    }

    return options;
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
