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
import { debounceTime, filter } from 'rxjs/operators';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { TitleCasePipe } from '@angular/common';
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
import {
  ACTIONS_BULK_EDIT,
  ACTIONS_VIEW_OPTIONS,
  ADD_MODAL_MAX_WIDTH,
  MODAL_NARROW_WIDTH,
} from '../../app.constants';
import { NotificationService } from '../../_services/notification.service';
import { ShareModalComponent } from '../modals/share-modal/share-modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TitleCasePipe],
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
  bulkEditOptionsDefs: NavItem[];
  stickyColumnsCount = 0;

  @Input() isSortable = false;
  @Input() isPageable = false;
  @Input() isSelectableCheckboxHidden = false;
  @Input() isSelectableOnce = false;
  @Input() isSelectable = false;
  @Input() isEditable = false;
  @Input() isViewable = false;
  @Input() viewableIcon = 'wysiwyg';
  @Input() isHeaderSticky = false;
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
  @Input() showLegend = false;
  @Input() spacerRight = true;

  _tableColumns: TableColumn[] = [];
  @Input() set tableColumns(value) {
    this._tableColumns = value;
    this.setColumns();
  }
  get tableColumns(): TableColumn[] {
    return this._tableColumns;
  }

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
  @Output() viewOptionEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('vsTable', { read: ElementRef, static: false }) vsTable: ElementRef;

  constructor(
    private filterService: FilterService,
    private localStorageService: LocalStorageService,
    public translateService: TranslateService,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    public titleCasePipe: TitleCasePipe
  ) {}

  ngOnInit(): void {
    this.bulkEditOptionsDefs = this.bulkEditOptions;

    if (this.isSelectableOnce) {
      this.selection = new SelectionModel<any>(false, []);
    }

    this.setColumns();

    this.tableHeight = this.fullHeight ? window.innerHeight : this.limit * this.rowHeight;
    this.determineHeight(this.fullHeight);

    this.subscriptions.push(
      this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
        if (this.preSetFilters) {
          this.filters = this.preSetFilters;
        }
        this.offset = value;
        this.getResources();
      })
    );

    this.subscriptions.push(
      this.filterService
        .getFilters()
        .pipe(filter(({ formId }) => formId === this.filterFormId))
        .subscribe((response: any) => {
          this.filters = response.filters;
          if (this.preSetFilters) {
            this.filters = this.filters.concat(this.preSetFilters);
          }
          this.getResources(true);

          if (!this.bulkEditOptions?.length) {
            return;
          }

          const relevance = response.filters?.find((item: any) => item.field === 'relevanceStatus');
          switch (relevance?.value) {
            case 'ACTIVE':
              this.bulkEditOptionsDefs = this.bulkEditOptions.filter(
                (item) => item.action !== ACTIONS_BULK_EDIT.DEARCHIVE
              );
              break;
            case 'ARCHIVED':
              this.bulkEditOptionsDefs = this.bulkEditOptions.filter(
                (item) => item.action !== ACTIONS_BULK_EDIT.ARCHIVE
              );
              break;
            case 'ALL':
              this.bulkEditOptionsDefs = this.bulkEditOptions.filter(
                (item) =>
                  item.action !== ACTIONS_BULK_EDIT.ARCHIVE &&
                  item.action !== ACTIONS_BULK_EDIT.DEARCHIVE
              );
              break;
            default:
              this.bulkEditOptionsDefs = this.bulkEditOptions;
          }
        })
    );
  }

  setColumns(): void {
    this.displayedColumns = this.getColumns();
    this.columnKeys = this.getColumnsKeyByName(this.displayedColumns);
    this.additionalHeaderDefs = this.getAdditionalHeader();
    this.additionalHeader = this.additionalHeaderDefs.map((item) => item.name);
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
    let stickyColumns = 0;

    if (this.saveConfigKey) {
      const config = this.localStorageService.get(this.saveConfigKey);

      if (config) {
        columns = this.getColumnsNameByKey(config);
      }
    }

    if (this.isViewable) {
      columns.unshift('view');
      stickyColumns += 1;
    }

    if (this.isEditable) {
      columns.unshift('edit');
      stickyColumns += 1;
    }

    if (this.isSelectable) {
      columns.unshift('select');
      stickyColumns += 1;
    }

    if (this.spacerRight) {
      columns.push('$spacerRight$');
    }

    this.stickyColumnsCount = stickyColumns;

    return [...new Set(columns)];
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

  confirmBulkAction(type: string): void {
    const items = this.getSelectedItems();
    const context = this.titleCasePipe.transform(this.showTotalContext).replaceAll(' ', '');
    let titleKey = '';
    let messageKey = '';
    let buttonKey = '';

    switch (type) {
      case ACTIONS_BULK_EDIT.DELETE:
        titleKey = 'strings.headingConfirmDeletion';
        messageKey = `strings.confirmationDelete${context}`;
        buttonKey = 'captions.actionDelete';
        break;
      case ACTIONS_BULK_EDIT.ARCHIVE:
        titleKey = 'strings.headingConfirmArchiving';
        messageKey = `strings.confirmationArchive${context}`;
        buttonKey = 'captions.actionArchiveCoreEntity';
        break;
      case ACTIONS_BULK_EDIT.DEARCHIVE:
        titleKey = 'strings.headingConfirmDearchiving';
        messageKey = `strings.confirmationDearchive${context}`;
        buttonKey = 'captions.actionDearchiveCoreEntity';
        break;
      case ACTIONS_BULK_EDIT.ENABLE:
        titleKey = 'strings.headingConfirmEnabling';
        messageKey = `strings.confirmationEnable${context}`;
        buttonKey = 'captions.actionEnable';
        break;
      case ACTIONS_BULK_EDIT.DISABLE:
        titleKey = 'strings.headingConfirmDisabling';
        messageKey = `strings.confirmationDisable${context}`;
        buttonKey = 'captions.actionDisable';
        break;
      default:
    }

    this.subscriptions.push(
      this.notificationService[type === ACTIONS_BULK_EDIT.DELETE ? 'confirm' : 'prompt']({
        title: this.translateService.instant(titleKey),
        message: this.translateService.instant(messageKey).replace('%d', items.length),
        buttonDeclineText: this.translateService.instant('captions.actionCancel'),
        buttonConfirmText: this.translateService.instant(buttonKey),
      }).subscribe((action) => {
        if (action === 'CONFIRM') {
          this.executeBulkAction(type);
        }
      })
    );
  }

  executeBulkAction(type: string): void {
    const items = this.getSelectedItems().map((item) => item.uuid);
    const action = type.toLowerCase() as keyof typeof this.resourceService;
    this.subscriptions.push(
      this.resourceService[action](items).subscribe({
        next: (response) => {
          const failures = items.filter((item) => !response.includes(item));
          this.notificationService.success(
            this.translateService.instant(
              failures.length ? 'messageEntitiesNotDeleted' : 'messageEntitiesDeleted',
              {
                entity: this.showTotalContext,
              }
            )
          );
          this.getResources(true);
        },
        error: (err: any) => {
          this.notificationService.error(err);
        },
        complete: () => {},
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
            this.selection.clear();
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
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex + this.stickyColumnsCount,
      event.currentIndex + this.stickyColumnsCount
    );
    // this.saveColumns();
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
    const bulkEditOption = this.bulkEditOptions?.find((item) => item.action === event);
    switch (event) {
      case ACTIONS_BULK_EDIT.EDIT:
        this.openBulkEdit(bulkEditOption);
        break;
      case ACTIONS_BULK_EDIT.DELETE:
      case ACTIONS_BULK_EDIT.ARCHIVE:
      case ACTIONS_BULK_EDIT.DEARCHIVE:
      case ACTIONS_BULK_EDIT.ENABLE:
      case ACTIONS_BULK_EDIT.DISABLE:
        this.confirmBulkAction(event);
        break;
      case ACTIONS_BULK_EDIT.GROUP:
        this.triggerGroupEvent.emit(this.getSelectedItems());
        break;
      case ACTIONS_VIEW_OPTIONS.DEFAULT:
        this.viewOptionEvent.emit(ACTIONS_VIEW_OPTIONS.DEFAULT);
        break;
      case ACTIONS_VIEW_OPTIONS.DETAILED:
        this.viewOptionEvent.emit(ACTIONS_VIEW_OPTIONS.DETAILED);
        break;
      case ACTIONS_VIEW_OPTIONS.FOLLOW_UP:
        this.viewOptionEvent.emit(ACTIONS_VIEW_OPTIONS.FOLLOW_UP);
        break;
      case ACTIONS_BULK_EDIT.SHARE:
        this.openShareModal();
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

  doRowAction($event: any): void {
    this.rowAction.emit($event);
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
    const el: any = document.querySelector<HTMLElement>('.cdk-virtual-scroll-viewport');
    this.changeWheelSpeed(el, 0.59);
  }

  openShareModal(): void {
    const dialogRef = this.dialog.open(ShareModalComponent, {
      width: MODAL_NARROW_WIDTH,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  handleScrollReset(container: any): number {
    return container.scrollTop;
  }

  handleMouseWheel(e: WheelEvent, container: any, scrollY: number, speedY: number): number {
    let newScrollY: number = scrollY;
    newScrollY += speedY * e.deltaY;
    if (newScrollY < 0) {
      newScrollY = 0;
    } else {
      const limitY: number = container.scrollHeight - container.clientHeight;
      if (newScrollY > limitY) {
        newScrollY = limitY;
      }
    }
    return newScrollY;
  }

  changeWheelSpeed(container: any, speedY: number): any {
    const e: WheelEvent = new WheelEvent('');
    let removed: boolean = false;
    container.addEventListener('mouseup', this.handleScrollReset(container), false);
    container.addEventListener('mousedown', this.handleScrollReset(container), false);
    container.addEventListener('mousewheel', this.handleMouseWheel(e, container, 0, speedY), false);

    return () => {
      if (removed) {
        return;
      }
      container.removeEventListener('mouseup', this.handleScrollReset(container), false);
      container.removeEventListener('mousedown', this.handleScrollReset(container), false);
      container.removeEventListener(
        'mousewheel',
        this.handleMouseWheel(e, container, 0, speedY),
        false
      );
      removed = true;
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
