import { Component, Input, OnInit } from '@angular/core';
import { DatepickerHeaderTodayComponent } from '../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { DEFAULT_DATE_FORMAT } from '../../_constants/common';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';

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
  hideChildren: number[] = [];

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
      'merge',
      'pick',
      'hide',
    ];
  }


  triggerDatePicker(picker: any): void {
    picker.open();
  }

  processTableData(): any[] {
    const newArray: any[] = [];
    this.mergeDuplicates.forEach((mergeDuplicate: any) => {
      newArray.push(mergeDuplicate.parent);
      newArray.push(mergeDuplicate.child);
    });

    return newArray;
  }

  isChild(index: number): boolean {
    return index % 2 === 1;
  }

  isChildHidden(index: number): boolean {
    return this.hideChildren.includes(index);
  }

  hideChild(index: number): void {
    if (this.hideChildren.includes(index + 1)) {
      this.hideChildren.splice(
        this.hideChildren.findIndex((item) => item === index + 1),
        1
      );
    } else {
      this.hideChildren.push(index + 1);
    }
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

  mergeAction(element: any): void {
    // eslint-disable-next-line no-console
    console.log('element', element);
  }

  pickAction(element: any): void {
    // eslint-disable-next-line no-console
    console.log('element', element);
  }

  hideAction(element: any): void {
    // eslint-disable-next-line no-console
    console.log('element', element);
  }
}
