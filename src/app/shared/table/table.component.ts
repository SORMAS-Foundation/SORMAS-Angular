import { SelectionModel } from '@angular/cdk/collections';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';

import { TableColumn } from './table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public dataSource = new TableVirtualScrollDataSource<any>([]);
  public displayedColumns: string[] = [];
  selection = new SelectionModel<any>(true, []);

  // Manually set the amount of buffer and the height of the table elements
  BUFFER_SIZE = 3;
  rowHeight = 48;
  headerHeight = 56;
  gridHeight = 400;
  // rows: Observable<Array<any>> = of([]);

  @ViewChild(CdkVirtualScrollViewport, { static: false }) viewPort!: CdkVirtualScrollViewport;

  @ViewChild(MatSort, { static: true }) matSort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) matPaginator!: MatPaginator;

  @Input() isSortable = false;
  @Input() isPageable = false;
  @Input() isSelectable = false;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];
  @Input() tableColumns: TableColumn[] = [];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowSelection: EventEmitter<any> = new EventEmitter();
  @Output() fetchMoreData: EventEmitter<number> = new EventEmitter();

  date = new Date();

  @Input()
  set tableData(data: any[]) {
    this.setdataSource(data);
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    this.displayedColumns = this.isSelectable ? ['select', ...columnNames] : columnNames;
    this.selection.changed.subscribe(() => this.rowSelection.emit(this.selection.selected));
  }

  scrolledIndexChange(index: number): void {
    console.log(index);

    // max 1 request pert second
    if (new Date().getTime() - this.date.getTime() > 1000) {
      this.fetchMoreData.emit(index);
      this.date = new Date();
    }
  }

  setdataSource(data: any): void {
    this.dataSource.data = data;

    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.matPaginator;
  }

  sortTable(sortParameters: Sort): void {
    const columnName = this.tableColumns.find((column) => column.name === sortParameters.active)
      ?.dataKey;
    if (columnName) {
      // eslint-disable-next-line no-param-reassign
      sortParameters.active = columnName;
    }
    this.sort.emit(sortParameters);
  }
}
