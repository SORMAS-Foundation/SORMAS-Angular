import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { Resource } from '../../_models/resource';

import * as constants from '../../app.constants';
import { Sorting } from '../../_models/common';
import { NotificationService } from '../../_services/notification.service';
import { TableColumn } from '../table/table-column';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss'],
})
export class Table2Component implements OnInit {
  page = 0;
  limit = constants.PAGE_SIZE;
  columnKeys: string[] = [];
  sorting: Sorting = { ascending: true, field: 'uuid' };
  selection = new SelectionModel<any>(true, []);

  @Input() tableData: Resource[] = [];
  @Input() tableColumns: TableColumn[] = [];
  @Input() isSelectable = false;
  @Input() resourceService: any;

  @Output() selectCase: EventEmitter<any> = new EventEmitter();
  @Output() selectData: EventEmitter<any> = new EventEmitter();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.columnKeys = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.dataKey);
    this.selection.changed.subscribe(() => this.selectData.emit(this.selection.selected));
  }

  onCaseSelect(id: any): void {
    this.selectCase.emit({
      id,
    });
  }

  onCheckboxChange(element: any): void {
    this.selectData.emit({
      element,
    });
  }

  getResources(reset: boolean = false): any {
    this.resourceService.getAll({ page: this.page, size: this.limit }, this.sorting).subscribe({
      next: (response: any) => {
        if (reset) {
          this.page = 0;
          this.tableData = response.elements;
        } else {
          this.page += this.limit;
          this.tableData = this.tableData.concat(response.elements);
        }
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }

  onTableScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.getResources();
    }
  }

  sort(dataKey: string, ascending: boolean): void {
    this.sorting = {
      field: dataKey,
      ascending,
    };

    this.getResources(true);
  }
}
