import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { DatepickerHeaderTodayComponent } from '../../shared/dynamic-form/components/datepicker-header-today/datepicker-header-today.component';
import { DEFAULT_DATE_FORMAT } from '../../_constants/common';
import { MergeDuplicateDto } from '../../_models/mergeDuplicateDto';
import { MergeDuplicateService } from '../../_services/api/mergeDuplicate.service';
import { MergeDuplicateContactService } from '../../_services/api/mergeDuplicateContact.service';

@Component({
  selector: 'app-merge-duplicates-table',
  templateUrl: './merge-duplicates-table.component.html',
  styleUrls: ['./merge-duplicates-table.component.scss'],
})
export class MergeDuplicatesTableComponent implements OnInit, OnDestroy {
  header = DatepickerHeaderTodayComponent;
  defaultDateFormat = DEFAULT_DATE_FORMAT;

  private subscriptions: Subscription[] = [];

  mergeDuplicates: MergeDuplicateDto[];

  @Input() type: string;

  displayedColumns: string[];
  hideChildren: number[] = [];

  size = 20;
  offset = 0;

  totalElementCount: number;

  constructor(
    private mergeDuplicatesService: MergeDuplicateService,
    private mergeDuplicatesContactService: MergeDuplicateContactService,
    public translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.displayedColumns = [
      'uuid',
      'disease',
      'caseClassification',
      'personFirstName',
      'personLastName',
      'age',
      'sex',
      'districtUuid',
      'healthFacilityName',
      'reportDate',
      'creationDate',
      'completeness',
      'merge',
      'hide',
      'pick',
    ];

    if (this.type === 'contacts') {
      this.displayedColumns.splice(1, 0, 'caze');
    }

    this.getMergeDuplicates();
  }

  getMergeDuplicates(concat: boolean = false): void {
    let service = this.mergeDuplicatesService;
    if (this.type === 'contacts') {
      service = this.mergeDuplicatesContactService;
    }
    this.subscriptions.push(
      service.getAll({ offset: this.offset, size: this.size }, null, null, true).subscribe({
        next: (response: any) => {
          if (concat) {
            this.mergeDuplicates = this.mergeDuplicates.concat(
              this.processTableData(response.elements)
            );
          } else {
            this.mergeDuplicates = this.processTableData(response.elements);
          }
          this.totalElementCount = response.totalElementCount;
        },
        error: () => {},
        complete: () => {},
      })
    );
  }

  onTableScroll(e: any): void {
    const tableViewHeight = e.target.offsetHeight;
    const tableScrollHeight = e.target.scrollHeight;
    const scrollLocation = e.target.scrollTop;

    const buffer = 200;
    const limit = tableScrollHeight - tableViewHeight - buffer;
    if (scrollLocation > limit) {
      this.offset += this.size;
      this.getMergeDuplicates(true);
    }
  }

  processTableData(array: any[]): any[] {
    const newArray: any[] = [];
    array.forEach((mergeDuplicate: any) => {
      newArray.push(mergeDuplicate.parent);
      newArray.push(mergeDuplicate.child);
    });

    return newArray;
  }

  isChild(index: number): boolean {
    return index % 2 === 1;
  }

  isChildHidden(index: number): boolean {
    if (index > 0) {
      return this.hideChildren.includes(index);
    }

    return false;
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

  getTotal(): string {
    return this.translateService
      .instant('captions.caseNumberOfDuplicatesDetected')
      .replace('%d', this.totalElementCount);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriptions) => subscriptions.unsubscribe());
  }
}
