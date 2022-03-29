import { Component, Input, OnInit } from '@angular/core';
import { DatepickerHeaderTodayComponent } from '../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { DEFAULT_DATE_FORMAT } from '../../_constants/common';
import {MergeDuplicateDto} from '../../_models/mergeDuplicateDto';

@Component({
  selector: 'app-merge-duplicates-table',
  templateUrl: './merge-duplicates-table.component.html',
  styleUrls: ['./merge-duplicates-table.component.scss'],
})
export class MergeDuplicatesTableComponent implements OnInit {
  header = DatepickerHeaderTodayComponent;
  defaultDateFormat = DEFAULT_DATE_FORMAT;

  @Input() mergeDuplicates: MergeDuplicateDto[];

  displayedColumns: string[];

  ngOnInit(): void {
    this.displayedColumns = [
      'uuid',
      'disease',
      'caseClassification',
      'personFirstName',
      'personLastName',
      'sex',
      'districtUuid',
      'healthFacilityName',
      'reportDate',
      'creationDate',
      'completeness',
    ];
  }

  triggerDatePicker(picker: any): void {
    picker.open();
  }

  onChangeCheckbox(element: any): void {
    if (element.enabled) {
      // eslint-disable-next-line no-param-reassign
      element.endDate = new Date(Date.now() + 6.048e8 * 3);
    } else {
      // eslint-disable-next-line no-param-reassign
      element.endDate = null;
    }
  }
}
