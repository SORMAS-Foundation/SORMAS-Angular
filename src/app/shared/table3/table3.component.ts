import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  page = 0;
  limit = constants.PAGE_SIZE;
  sorting: Sorting = { field: '', ascending: true };
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

  icons = IconsMap;

  constructor(
    private notificationService: NotificationService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    this.displayedColumns = this.isSelectable ? ['select', ...columnNames] : columnNames;

    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.page = value;
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
      .getAll({ page: this.page, size: this.limit }, this.sorting, this.filters)
      .subscribe({
        next: (response: any) => {
          if (reload) {
            const dataSourceTmp = [];
            for (let i = 0; i < response.totalNoElements; i++) {
              this.dataSourceArray.push({
                index: i,
              });
              dataSourceTmp.push({
                index: i,
              });
            }
            this.dataSource = new TableVirtualScrollDataSource(dataSourceTmp);
          }

          for (let i = this.page; i < this.page + this.limit; i++) {
            this.dataSourceArray[i] = response.elements[i - this.page];
          }
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
      });
  }

  scrolledIndexChange(index: number): void {
    this.debouncer.next(index);
  }

  sortTable(sortParameters: Sort): void {
    this.sorting.field = sortParameters.active;

    this.sorting.ascending = sortParameters.direction !== 'desc';

    this.getResources(true);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
