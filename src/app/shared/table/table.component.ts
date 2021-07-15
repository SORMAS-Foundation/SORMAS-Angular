import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  EventEmitter,
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
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from '../../_services/api/base.service';
import * as constants from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { Filter, NavItem, Sorting, TableColumn } from '../../_models/common';
import { FilterService } from '../../_services/filter.service';
import { LocalStorageService } from '../../_services/local-storage.service';
import { AddEditBaseModalComponent } from '../modals/add-edit-base-modal/add-edit-base-modal.component';
import { ACTIONS_BULK_EDIT, ADD_MODAL_MAX_WIDTH } from '../../app.constants';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, AfterViewInit {
  public dataSource = new TableVirtualScrollDataSource<any>([]);
  public displayedColumns: string[] = [];
  public uuidKey = constants.UUID_KEY;
  public advancedDataType = constants.AdvancedDataType;

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
  subscriptions: Subscription[] = [];

  private subscription: Subscription[] = [];

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
  @Input() viewOptions: NavItem[];
  @Input() bulkEditOptions: NavItem[];

  @Output() selectItem: EventEmitter<any> = new EventEmitter();
  @Output() clickItem: EventEmitter<any> = new EventEmitter();

  @ViewChild('vsTable', { read: ElementRef, static: false }) vsTable: ElementRef;

  constructor(
    private notificationService: NotificationService,
    private filterService: FilterService,
    private localStorageService: LocalStorageService,
    public translateService: TranslateService,
    private viewportRuler: ViewportRuler,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tableHeight = this.fullHeight ? window.innerHeight : this.limit * this.rowHeight;
    this.displayedColumns = this.getColumns();

    this.determineHeight(this.fullHeight);

    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      if (this.preSetFilters) {
        this.filters = this.preSetFilters;
      }
      this.offset = value;
      this.getResources(!value);
    });

    this.subscriptions.push(
      this.filterService.getFilters().subscribe((response: any) => {
        this.filters = response.filters;
        if (this.preSetFilters) {
          this.filters = this.filters.concat(this.preSetFilters);
        }
        this.getResources(true);
      })
    );
  }

  getRowData(index: number): any {
    return this.dataSourceArray[index];
  }

  getSelectedItems(): any[] {
    const result: any[] = [];
    this.selection.selected.forEach((row) => {
      result.push(this.dataSourceArray[row.index]);
    });
    return result;
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

  openBulkEdit(bulkEditOption: any): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      minWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant(bulkEditOption.componentTitle),
        component: bulkEditOption.component,
        editResources: this.getSelectedItems(),
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
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

          if (!this.fullHeight) {
            this.determineHeight();
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

  determineHeight(fullHeight?: boolean): void {
    setTimeout(() => {
      const table = fullHeight
        ? this.vsTable.nativeElement
        : this.vsTable.nativeElement.querySelector('table');
      const rect = table.getBoundingClientRect();

      if (fullHeight) {
        const viewportHeight = window.innerHeight;
        const offsetTop = rect.top + window.pageYOffset - document.documentElement.clientTop;

        this.tableHeight = viewportHeight - offsetTop;
        this.limit = Math.ceil((this.tableHeight - this.headerHeight) / this.rowHeight);
      } else {
        this.tableHeight = Math.ceil(rect.height) + 8;
      }
    });
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_BULK_EDIT.EDIT:
        // @ts-ignore
        // eslint-disable-next-line no-case-declarations
        const bulkEditOption = this.bulkEditOptions.find((item) => item.action === event);
        this.openBulkEdit(bulkEditOption);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log(event);
    }
  }

  ngAfterViewInit(): void {
    this.determineHeight(this.fullHeight);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
