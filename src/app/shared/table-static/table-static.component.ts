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
  @Input() multiselect = false;
  @Input() isSelectable = false;
  @Input() isHeaderSticky = false;
  @Input() showCheckbox = true;
  @Input() styleRow: (args: any) => string;

  @Output() selectItem: EventEmitter<any> = new EventEmitter();

  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [];
  selection: SelectionModel<any>;

  @ViewChild('table', { read: MatSort, static: false }) sort: MatSort;

  ngOnInit(): void {
    this.selection = new SelectionModel<any>(this.multiselect, []);
    this.displayedColumns = this.getColumns();
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }

  getColumns(): string[] {
    const columns = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.dataKey);
    if (this.isSelectable) {
      columns.unshift('select');
    }
    return columns;
  }

  getRowStyle(data: any): string {
    return typeof this.styleRow === 'function' ? this.styleRow(data) : '';
  }

  onSelectionChange(event: any, row: any): void {
    if (!this.isSelectable) {
      return;
    }
    if (event) {
      this.selection.toggle(row);
    }
    this.selectItem.emit({
      selected: this.selection.selected,
    });
  }
}
