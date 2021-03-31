import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { IconsMap } from 'src/app/app.constants';
import { BaseService } from '../../_services/api/base.service';
import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { Filter, Sorting, TableColumn } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.scss'],
})
export class Table3Component implements OnInit, OnDestroy {
  public dataSource = new TableVirtualScrollDataSource<any>([]);
  public displayedColumns: string[] = [];

  selection = new SelectionModel<any>(true, []);
  offset = 0;
  limit = constants.PAGE_SIZE;
  sorting: Sorting | null = null;
  filters: Filter[];
  debouncer: Subject<number> = new Subject<number>();
  dataSourceArray: any = [];
  subscription: Subscription = new Subscription();

  @Input() isSortable = false;
  @Input() isPageable = false;
  @Input() isSelectable = false;
  @Input() isHeaderSticky = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() visibleRowsCount = 10;
  @Input() resourceService: BaseService<any>;

  @Output() selectItem: EventEmitter<any> = new EventEmitter();
  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  icons = IconsMap;

  constructor(
    private notificationService: NotificationService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    this.displayedColumns = this.isSelectable ? ['select', ...columnNames] : columnNames;

    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.offset = value;
      if (!value) {
        this.getResources(true);
      } else {
        this.getResources();
      }
    });

    this.subscription = this.filterService.getFilters().subscribe((response: any) => {
      this.filters = response.filters;
      this.getResources(true);
    });
  }

  getTableData(index: number, key: string): any {
    if (typeof this.dataSourceArray[index].index !== 'undefined') {
      return 'loading';
    }
    return this.dataSourceArray[index][key];
  }

  getResources(reload: boolean = false): void {
    this.resourceService
      .getAll({ offset: this.offset, size: this.limit }, this.sorting, this.filters)
      .subscribe({
        next: (response: any) => {
          if (reload) {
            const dataSourceTmp = [];
            for (let i = 0; i < response.totalElementCount; i += 1) {
              this.dataSourceArray.push({
                index: i,
              });
              dataSourceTmp.push({
                index: i,
              });
            }
            this.dataSource = new TableVirtualScrollDataSource(dataSourceTmp);
          }

          for (let i = this.offset; i < this.offset + this.limit; i += 1) {
            this.dataSourceArray[i] = response.elements[i - this.offset];
          }
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      });
  }

  onItemSelect(event: any, row: any): void {
    event.stopPropagation();
    this.selectItem.emit({
      item: this.dataSourceArray[row.index],
    });
  }

  onItemClick(row: any): void {
    this.clickItem.emit({
      item: this.dataSourceArray[row.index],
    });
  }

  scrolledIndexChange(index: number): void {
    this.debouncer.next(index);
  }

  sortTable(sortParameters: Sort): void {
    this.sorting = {
      field: sortParameters.active,
      ascending: sortParameters.direction !== 'desc',
    };

    this.getResources(true);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
