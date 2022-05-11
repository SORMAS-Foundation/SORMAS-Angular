import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  form: FormGroup;
  statisticsAttributesGroups = STATISTICS_ATTRIBUTES_GROUPS;
  statisticsTimeAttributes = STATISTICS_TIME_ATTRIBUTES;
  statisticsPlaceAttributes = STATISTICS_PLACE_ATTRIBUTES;
  subscriptions: Subscription = new Subscription();

  ngOnInit(): void {
    this.createForm();
    this.watchFormChanges();
  }

  createForm(): void {
    this.form = new FormGroup({
      statisticsVisualizationType: new FormControl('TABLE'),
      rows: new FormControl(''),
      rowsDetails: new FormControl(),
      columns: new FormControl(''),
      columnsDetails: new FormControl(),
      statisticsVisualizationMapType: new FormControl('REGIONS'),
      statisticsVisualizationChartType: new FormControl('STACKED_COLUMN'),
      chartSeries: new FormControl(),
      chartXAxis: new FormControl(),
      caseCountOrIncidence: new FormControl('CASE_COUNT'),
      incidenceDivisor: new FormControl(100000),
      showZeroResults: new FormControl(false),
      hideOtherCountries: new FormControl(false),
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
