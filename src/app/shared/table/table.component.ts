import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

import { TableVirtualScrollDataSource } from 'ng-table-virtual-scroll';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from '../../_services/api/base.service';
import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { Filter, Sorting, TableColumn } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';
import { LocalStorageService } from '../../_services/local-storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, AfterViewInit {
  public dataSource = new TableVirtualScrollDataSource<any>([]);
  public displayedColumns: string[] = [];

  selection = new SelectionModel<any>(true, []);
  offset = 0;
  limit = constants.PAGE_SIZE;
  headerHeight = constants.VIRTUAL_SCROLL_DEFAULT_HEADER_HEIGHT;
  rowHeight = constants.VIRTUAL_SCROLL_DEFAULT_ROW_HEIGHT;
  tableHeight: number;
  sorting: Sorting | null = null;
  filters: Filter[];
  debouncer: Subject<number> = new Subject<number>();
  dataSourceArray: any = [];
  subscription: Subscription = new Subscription();
  icons = constants.IconsMap;

  @Input() isSortable = false;
  @Input() isPageable = false;
  @Input() isSelectable = false;
  @Input() isHeaderSticky = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() resourceService: BaseService<any>;
  @Input() saveConfigKey: string | undefined;
  @Input() fullHeight: boolean;
  @Input() appearance: string = constants.TableAppearanceOptions.STANDARD;
  @Input() preSetFilters: Filter[];

  @Output() selectItem: EventEmitter<any> = new EventEmitter();
  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  @ViewChild('vsTable', { read: ElementRef, static: false }) vsTable: ElementRef;

  constructor(
    private notificationService: NotificationService,
    private filterService: FilterService,
    private localStorageService: LocalStorageService,
    public translateService: TranslateService,
    private viewportRuler: ViewportRuler
  ) {}

  ngOnInit(): void {
    this.tableHeight = this.fullHeight ? window.innerHeight : this.limit * this.rowHeight;
    this.displayedColumns = this.getColumns();

    if (this.fullHeight) {
      this.viewportRuler.change(300).subscribe(() => this.determineHeight());
    }

    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      if (this.preSetFilters) {
        this.filters = this.preSetFilters;
      }
      this.offset = value;
      if (!value) {
        this.getResources(true);
      } else {
        this.getResources();
      }
    });

    this.subscription = this.filterService.getFilters().subscribe((response: any) => {
      this.filters = response.filters;
      if (this.preSetFilters) {
        this.filters = this.filters.concat(this.preSetFilters);
      }
      this.getResources(true);
    });
  }

  getColumns(): string[] {
    let columns = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);

    if (this.isSelectable) {
      columns.unshift('select');
    }

    if (!this.saveConfigKey) {
      return columns;
    }

    const config = this.localStorageService.get(this.saveConfigKey);

    if (config) {
      columns = config.filter((col: any) => columns.includes(col));
    }

    return columns;
  }

  getTableData(index: number, key: string): any {
    if (typeof this.dataSourceArray[index].index !== 'undefined') {
      return 'loading';
    }

    if (key.indexOf('.') > -1) {
      return key.split('.').reduce((o, i) => o && o[i], this.dataSourceArray[index]);
    }

    return this.dataSourceArray[index][key]?.toString();
  }

  getIcon(key: string): string {
    return this.icons[key as keyof typeof constants.IconsMap];
  }

  getClass(key: string, value: string): string {
    return `${key.toLocaleLowerCase()}-${value.toLocaleLowerCase()}`;
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
    if (!sortParameters || !sortParameters.direction) {
      this.sorting = null;
    } else {
      this.sorting = {
        field: sortParameters.active,
        ascending: sortParameters.direction !== 'desc',
      };
    }

    this.getResources(true);
  }

  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    if (this.saveConfigKey) {
      this.localStorageService.set(this.saveConfigKey, this.displayedColumns);
    }
  }

  determineHeight(): void {
    const viewportHeight = window.innerHeight;
    const rect = this.vsTable.nativeElement.getBoundingClientRect();
    const offsetTop = rect.top + window.pageYOffset - document.documentElement.clientTop;

    this.tableHeight = viewportHeight - offsetTop;
    this.limit = Math.ceil((this.tableHeight - this.headerHeight) / this.rowHeight);
  }

  ngAfterViewInit(): void {
    if (this.fullHeight) {
      setTimeout(() => this.determineHeight());
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
