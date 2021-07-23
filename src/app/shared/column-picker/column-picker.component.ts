import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FORM_DATA_MULTISELECT } from '../../_constants/form-data';
import { TableColumn } from '../../_models/common';
import { FormElementBase } from '../dynamic-form/types/form-element-base';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss'],
})
export class ColumnPickerComponent implements OnInit, OnDestroy {
  @Input() columns: TableColumn[];
  @Input() selection: string[];

  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter();

  form: FormGroup = new FormGroup({});
  config: FormElementBase<string> = {
    ...FORM_DATA_MULTISELECT,
    key: 'columns',
    label: 'actionToggleColumns',
    placeholder: 'promptSearchColumns',
    options: [],
  };
  subscriptions: Subscription[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.generateOptions();
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      columns: new FormControl(this.selection || []),
    });

    const control = this.form.get('columns');

    if (control) {
      this.subscriptions.push(
        control.valueChanges.subscribe((value) => {
          this.selectionChange.emit(value);
        })
      );
    }
  }

  generateOptions(): void {
    const options = this.columns.map(({ name, dataKey, essential }) => ({
      key: dataKey,
      value: this.translateService.instant(name),
      disabled: essential,
    }));
    this.config = { ...this.config, options };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
