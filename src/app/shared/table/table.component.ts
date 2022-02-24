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
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { BaseService } from '../../_services/api/base.service';
import * as constants from '../../app.constants';
import {
  FetchStatus,
  FetchStatusType,
  Filter,
  NavItem,
  Sorting,
  TableColumn,
} from '../../_models/common';
import { FilterService } from '../../_services/filter.service';
import { LocalStorageService } from '../../_services/local-storage.service';
import { AddEditBaseModalComponent } from '../modals/add-edit-base-modal/add-edit-base-modal.component';
import { ACTIONS_BULK_EDIT, ADD_MODAL_MAX_WIDTH } from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';

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
  public selection = new SelectionModel<any>(true, []);

  offset = 0;
  limit = constants.PAGE_SIZE;
  headerHeight = constants.VIRTUAL_SCROLL_DEFAULT_HEADER_HEIGHT;
  rowHeight = constants.VIRTUAL_SCROLL_DEFAULT_ROW_HEIGHT;
  tableHeight: number;
  sorting: Sorting | null = null;
  filters: Filter[];
  debouncer: Subject<number> = new Subject<number>();
  dataSourceArray: any[] = [];
  subscriptions: Subscription[] = [];
  columnKeys: string[] = [];
  totalItems = 0;
  fetchStatus: FetchStatus | undefined;
  fetchStatusType = FetchStatusType;
  loading = false;
  additionalHeaderDefs: any[] = [];
  additionalHeader: string[] = [];

  @Input() isSortable = false;
  @Input() isPageable = false;
  @Input() isSelectableCheckboxHidden = false;
  @Input() isSelectableOnce = false;
  @Input() isSelectable = false;
  @Input() isEditable = false;
  @Input() isViewable = false;
  @Input() isHeaderSticky = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() resourceService: BaseService<any>;
  @Input() saveConfigKey: string | undefined;
  @Input() fullHeight: boolean;
  @Input() appearance: string = constants.TableAppearanceOptions.STANDARD;
  @Input() viewOptions: NavItem[];
  @Input() bulkEditOptions: NavItem[];
  @Input() allowToggleColumns = false;
  @Input() rowStyleData: string;
  @Input() showTotal = false;
  @Input() showTotalContext = 'Items';
  @Input() filterFormId: string;

  preSetFiltersTmp: Filter[];
  @Input() set preSetFilters(value) {
    if (this.preSetFiltersTmp?.length !== value.length) {
      this.filters = value;
      this.getResources(true);
    }
    this.preSetFiltersTmp = value;
  }
  get preSetFilters(): Filter[] {
    return this.preSetFiltersTmp;
  }

  @Output() selectItem: EventEmitter<any> = new EventEmitter();
  @Output() editItem: EventEmitter<any> = new EventEmitter();
  @Output() viewItem: EventEmitter<any> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter();
  @Output() triggerGroupEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('vsTable', { read: ElementRef, static: false }) vsTable: ElementRef;

  constructor(
    private filterService: FilterService,
    private localStorageService: LocalStorageService,
    public translateService: TranslateService,
    private dialog: MatDialog,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    if (this.isSelectableOnce) {
      this.selection = new SelectionModel<any>(false, []);
    }

    this.tableHeight = this.fullHeight ? window.innerHeight : this.limit * this.rowHeight;
    this.displayedColumns = this.getColumns();
    this.columnKeys = this.getColumnsKeyByName(this.displayedColumns);
    this.additionalHeaderDefs = this.getAdditionalHeader();
    this.additionalHeader = this.additionalHeaderDefs.map((item) => item.name);

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
        if (response.formId === this.filterFormId) {
          this.filters = response.filters;
          if (this.preSetFilters) {
            this.filters = this.filters.concat(this.preSetFilters);
          }
          this.getResources(true);
        }
      })
    );
  }

  getSelectedItems(): any[] {
    const result: any[] = [];
    this.selection.selected.forEach((row) => {
      result.push(this.dataSourceArray[row.index]);
    });
    return result;
  }

  getAdditionalHeader(): any {
    const result: any[] = [];
    const actionCols =
      Number(this.isEditable) + Number(this.isSelectable) + Number(this.isViewable);
    if (actionCols) {
      result.push({
        name: '$empty$',
        span: actionCols,
      });
    }
    this.tableColumns.forEach((item) => {
      if (item.additionalName) {
        result.push({
          name: item.additionalName,
          span: 1,
        });
      } else if (result.length) {
        result[result.length - 1].span += 1;
      } else {
        result.push({
          name: '$empty$',
          span: 1,
        });
      }
    });
    if (result.length === 1 && result[0].name === '$empty$') {
      return [];
    }
    return result;
  }

  getColumns(): string[] {
    let columns = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);

    if (this.isViewable) {
      columns.unshift('view');
    }

    if (this.isEditable) {
      columns.unshift('edit');
    }

    if (this.isSelectable) {
      columns.unshift('select');
    }

    if (this.saveConfigKey) {
      const config = this.localStorageService.get(this.saveConfigKey);

      if (config) {
        columns = this.getColumnsNameByKey(config);
      }
    }

    return columns;
  }

  saveColumns(): void {
    if (this.saveConfigKey) {
      this.localStorageService.set(this.saveConfigKey, this.columnKeys);
    }
  }

  getColumnsKeyByName(names: any[]): any[] {
    return names.map((item) => {
      const column = this.tableColumns.find((col) => col.name === item);
      return column?.dataKey;
    });
  }

  getColumnsNameByKey(keys: string[]): string[] {
    const columns: string[] = [];

    keys.forEach((item: string) => {
      const column = this.tableColumns.find((col) => col.dataKey === item);
      if (column) {
        columns.push(column.name);
      }
    });

    if (this.isSelectable) {
      columns.unshift('select');
    }

    return columns;
  }

  openBulkEdit(bulkEditOption: any): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant(bulkEditOption.componentTitle),
        component: bulkEditOption.component,
        editResources: this.getSelectedItems(),
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  openBulkDelete(): void {
    const items = this.getSelectedItems();
    this.notificationService
      .confirm({
        title: this.translateService.instant('strings.headingConfirmDeletion'),
        message: this.translateService
          .instant(`strings.confirmationDelete${this.showTotalContext}`)
          .replace('%d', items.length),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant('captions.actionDelete'),
      })
      .subscribe((action) => {
        if (action === 'CONFIRM') {
          this.deleteItems();
        }
      });
  }

  deleteItems(): void {
    const items = this.getSelectedItems().map((item) => item.uuid);
    this.subscriptions.push(
      this.resourceService.delete(items).subscribe((response) => {
        const errors = items.filter((item) => !response.includes(item));
        if (errors.length) {
          this.notificationService.success(
            this.translateService.instant('messageEntitiesNotDeleted', {
              entity: this.showTotalContext,
            })
          );
        }
        this.notificationService.success(
          this.translateService.instant('messageEntitiesDeleted', { entity: this.showTotalContext })
        );
        this.selection.clear();
        this.getResources(true);
      })
    );
  }

  public getResources(reload: boolean = false): void {
    this.loading = true;
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

          this.totalItems = response.totalElementCount;

          if (this.totalItems) {
            this.fetchStatus = undefined;
          } else {
            this.fetchStatus =
              this.preSetFilters?.length || this.filters?.length
                ? this.fetchStatusType.NO_MATCH
                : this.fetchStatusType.NO_DATA;
          }

          if (!this.fullHeight) {
            this.determineHeight();
          }
          this.loading = false;
        },
        error: () => {
          this.fetchStatus = this.fetchStatusType.ERROR;
          this.loading = false;
        },
        complete: () => {},
      });
  }

  scrolledIndexChange(index: number): void {
    this.debouncer.next(index);
  }

  onSelectionChange(event: any, row: any): void {
    if (!this.isSelectable) {
      return;
    }
    if (event) {
      this.selection.toggle(row);
    }
    const selections = this.getSelectedItems();
    if (this.selectItem) {
      this.selectItem.emit({
        selected: selections,
      });
    }
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
    this.saveColumns();
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
    const bulkEditOption = this.bulkEditOptions.find((item) => item.action === event);
    switch (event) {
      case ACTIONS_BULK_EDIT.EDIT:
        this.openBulkEdit(bulkEditOption);
        break;
      case ACTIONS_BULK_EDIT.DELETE:
        this.openBulkDelete();
        break;
      case ACTIONS_BULK_EDIT.GROUP:
        this.triggerGroupEvent.emit(this.getSelectedItems());
        break;
      default:
        // eslint-disable-next-line no-console
        console.log(event);
    }
  }

  doActionEdit(index: number): void {
    this.editItem.emit(this.dataSourceArray[index]);
  }

  doActionView(index: number): void {
    this.viewItem.emit(this.dataSourceArray[index]);
  }

  doRowAction(index: number, $event: string): void {
    this.rowAction.emit([this.dataSourceArray[index], $event]);
  }

  updateTableColumns(columns: string[]): void {
    this.displayedColumns = this.getColumnsNameByKey(columns);
    this.columnKeys = this.getColumnsKeyByName(this.displayedColumns);
    this.saveColumns();
  }

  getRowStyle(index: number): string {
    const raw = this.dataSourceArray[index];
    const data = this.rowStyleData.split('.').reduce((o, i) => o && o[i], raw);
    return data ? data.replace(/\s+/g, '-').toLowerCase() : '';
  }

  ngAfterViewInit(): void {
    this.determineHeight(this.fullHeight);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
