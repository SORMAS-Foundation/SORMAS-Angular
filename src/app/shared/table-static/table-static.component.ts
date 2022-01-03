import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableAppearanceOptions } from '../../app.constants';
import { TableColumn } from '../../_models/common';

@Component({
  selector: 'app-table-static',
  templateUrl: './table-static.component.html',
  styleUrls: ['./table-static.component.scss'],
})
export class TableStaticComponent implements OnInit, AfterViewInit {
  @Input() data: any[];
  @Input() tableColumns: TableColumn[] = [];
  @Input() appearance: string = TableAppearanceOptions.MINIMAL;
  @Input() styleRow: (args: any) => string;

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];

  @ViewChild('table', { read: MatSort, static: false }) sort: MatSort;

  ngOnInit(): void {
    this.displayedColumns = this.getColumns();
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  getColumns(): string[] {
    return this.tableColumns.map((tableColumn: TableColumn) => tableColumn.dataKey);
  }

  getRowStyle(data: any): string {
    return typeof this.styleRow === 'function' ? this.styleRow(data) : '';
  }
}
