import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter } from '../../../_models/common';
import { FilterService } from '../../../_services/filter.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { FormBase } from '../../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-filters-form',
  templateUrl: './filters-form.component.html',
  styleUrls: ['./filters-form.component.scss'],
})
export class FiltersFormComponent implements OnInit, OnDestroy {
  @Input() formId: string;
  @Input() set data(raw: FormBase<any>[]) {
    this.formData = JSON.parse(JSON.stringify(raw));
  }
  formData: FormBase<any>[];
  filters: Filter[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private filterService: FilterService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        if (!response.filters.length && this.filters.length) {
          this.formActionsService.setDiscard(this.formId);
        }
      })
    );
  }

  getFormValues(raw: any): any {
    let result: any = {};
    Object.entries(raw).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      if (key.includes('.')) {
        const strToObj = (str: string, val: any) => {
          const props = str.split('.');
          const obj: any = {};
          let ref = obj;
          let i;
          for (i = 0; i < props.length - 1; i += 1) {
            // eslint-disable-next-line no-multi-assign
            ref = ref[props[i]] = {};
          }
          ref[props[i]] = val;
          return obj;
        };
        result = strToObj(key, value);
      } else {
        // eslint-disable-next-line no-param-reassign
        result[key] = value;
      }
    });

    return result;
  }

  updateFilters(raw: any): void {
    const formValues = this.getFormValues(raw);
    const keys: string[] = Object.keys(formValues);
    const values: string[] = Object.values(formValues);
    this.filters = [];
    values.forEach((e, i) => {
      if (values[i] !== null && values[i] !== undefined) {
        this.filters.push({ field: keys[i], value: values[i] });
      }
    });
    this.filterService.setFilters(this.filters);
  }

  ngOnDestroy(): void {
    this.formActionsService.setDiscard(this.formId);
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
