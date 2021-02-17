import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableColumn } from './table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  public dataSource = new MatTableDataSource<any>([]);
  public displayedColumns: string[] = [];
  selection = new SelectionModel<any>(true, []);

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

  @Input() set tableData(data: any[]) {
    this.setdataSource(data);
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    this.displayedColumns = this.isSelectable ? ['select', ...columnNames] : columnNames;
    this.selection.changed.subscribe(() => this.rowSelection.emit(this.selection.selected));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.matPaginator;
  }

  setdataSource(data: any): void {
    this.dataSource = new MatTableDataSource<any>(data);
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
