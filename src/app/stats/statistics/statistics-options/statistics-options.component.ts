import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  STATISTICS_ATTRIBUTES_GROUPS,
  STATISTICS_PLACE_ATTRIBUTES,
  STATISTICS_TIME_ATTRIBUTES,
} from './statistics-options-form-data';

@Component({
  selector: 'app-statistics-options',
  templateUrl: './statistics-options.component.html',
  styleUrls: ['./statistics-options.component.scss'],
})
export class StatisticsOptionsComponent implements OnInit {
  form: UntypedFormGroup;
  statisticsAttributesGroups = STATISTICS_ATTRIBUTES_GROUPS;
  statisticsTimeAttributes = STATISTICS_TIME_ATTRIBUTES;
  statisticsPlaceAttributes = STATISTICS_PLACE_ATTRIBUTES;
  twoAxes = true;
  subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.createForm();
    this.watchFormChanges();
  }

  createForm(): void {
    this.form = new UntypedFormGroup({
      statisticsVisualizationType: new UntypedFormControl('TABLE'),
      rows: new UntypedFormControl(''),
      rowsDetails: new UntypedFormControl(),
      columns: new UntypedFormControl(''),
      columnsDetails: new UntypedFormControl(),
      statisticsVisualizationMapType: new UntypedFormControl('REGIONS'),
      statisticsVisualizationChartType: new UntypedFormControl('STACKED_COLUMN'),
      chartSeries: new UntypedFormControl(),
      chartXAxis: new UntypedFormControl(),
      caseCountOrIncidence: new UntypedFormControl('CASE_COUNT'),
      incidenceDivisor: new UntypedFormControl(100000),
      showZeroResults: new UntypedFormControl(false),
      hideOtherCountries: new UntypedFormControl(false),
    });
  }

  watchFormChanges(): void {
    const controlChartType = this.form.get('statisticsVisualizationChartType');
    const controlCountOrIncidence = this.form.get('caseCountOrIncidence');
    const controlRows = this.form.get('rows');
    const controlRowsDetails = this.form.get('rowsDetails');
    const controlColumns = this.form.get('columns');
    const controlColumnsDetails = this.form.get('columnsDetails');

    if (controlCountOrIncidence) {
      this.subscriptions.add(
        controlCountOrIncidence.valueChanges
          .pipe(filter((val) => val === 'CASE_INCIDENCE'))
          .subscribe(() => {
            if (controlChartType?.value === 'STACKED_COLUMN' || controlChartType?.value === 'PIE') {
              controlChartType.setValue('COLUMN');
            }
          })
      );
    }

    if (controlRows) {
      this.subscriptions.add(
        controlRows.valueChanges.subscribe(() => {
          controlRowsDetails?.setValue(null);
        })
      );
    }

    if (controlColumns) {
      this.subscriptions.add(
        controlColumns.valueChanges.subscribe(() => {
          controlColumnsDetails?.setValue(null);
        })
      );
    }

    if (controlChartType) {
      this.subscriptions.add(
        controlChartType.valueChanges.subscribe((val) => {
          this.twoAxes = val !== 'PIE';
        })
      );
    }
  }

  swapAxes(): void {
    const { rows, rowsDetails, columns, columnsDetails } = this.form.value;
    const controlRows = this.form.get('rows');
    const controlRowsDetails = this.form.get('rowsDetails');
    const controlColumns = this.form.get('columns');
    const controlColumnsDetails = this.form.get('columnsDetails');

    controlRows?.setValue(columns);
    controlRowsDetails?.setValue(columnsDetails);
    controlColumns?.setValue(rows);
    controlColumnsDetails?.setValue(rowsDetails);
  }

  generate(): void {}
}
