import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Resource } from '../../_models/resource';

import * as constants from '../../app.constants';
import { Sorting } from '../../_models/common';
import { NotificationService } from '../../_services/notification.service';
import { TableColumn } from '../table/table-column';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

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
  debouncer: Subject<number> = new Subject<number>();

  displayedColumns = ['id', 'name'];

  dataSource: any;


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


    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      console.log('valueee', value);
    });

    const DATA = this.getData(1000);
    //this.dataSource = new TableVirtualScrollDataSource(DATA);
  }

  getData(n = 1000): any[] {
    return Array.from({length: n}, (v, i) => ({
      id: i + 1,
      name: `Element #${i + 1}`
    }));
  }

  scrolledIndexChange(index: number): void {
    this.debouncer.next(index);
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
          this.dataSource = new TableVirtualScrollDataSource(response.elements);
        }
      },
      error: (err: any) => {
        this.notificationService.error(err);
      },
      complete: () => {},
    });
  }

  sort(dataKey: string, ascending: boolean): void {
    this.sorting = {
      field: dataKey,
      ascending,
    };

    this.getResources(true);
  }
}
