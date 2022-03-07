import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { addDays, format } from 'date-fns';
import { filter } from 'rxjs/operators';
import { CaseService } from '../../_services/api/case.service';
import { Filter, NavItem, TableColumn, TableDataFormatOptions } from '../../_models/common';
import * as tableDataDefault from './case-list-table-data';
import * as tableDataDetailed from './case-list-detailed-table-data';
import * as tableDataFollowUp from './case-list-follow-up-table-data';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CONFIG_CASES } from '../../_constants/storage';
import {
  HEADER_HEIGHT,
  ADD_MODAL_MAX_WIDTH,
  CASE_EXPORT_CUSTOM_MODAL_WIDTH,
  CASE_IMPORT_MODAL_WIDTH,
  CASE_FILTERS_FORM_ID,
  ACTIONS_VIEW_OPTIONS,
  PERIOD_PICKER_DEFAULT_RANGE,
} from '../../app.constants';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { CustomCaseExportComponent } from '../custom-case-export/custom-case-export.component';
import {
  actionsMoreDefs,
  actionsViewOptionsDefs,
  actionsBulkEditDefs,
} from './case-list-actions-data';
import { ACTIONS_CASE } from '../../_constants/actions';
import { CaseImportComponent } from '../case-import/case-import.component';
import { HelperService } from '../../_services/helper.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CaseAddComponent } from '../../shared/case-add/case-add.component';
import { FORM_DATA_CASE_FILTERS } from '../case-filters/case-filters-form-data';
import { LocalStorageService } from '../../_services/local-storage.service';
import { CaseFollowUpService } from '../../_services/api/case-follow-up.service';
import { FilterService } from '../../_services/filter.service';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CASE_FILTERS));
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];
  legend: any[] | undefined;
  configKey = CONFIG_CASES;
  headerHeight = HEADER_HEIGHT;
  actionsMore: NavItem[] = actionsMoreDefs;
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  routeParams: Params;
  formIdFilters = CASE_FILTERS_FORM_ID;
  tableView = ACTIONS_VIEW_OPTIONS.DEFAULT;
  views = ACTIONS_VIEW_OPTIONS;
  showTable = true;
  $service: any;
  presetFilters: Filter[] = [];
  to: Date = new Date();
  from: Date = addDays(new Date(), -PERIOD_PICKER_DEFAULT_RANGE + 1);

  private subscriptions: Subscription[] = [];

  constructor(
    private caseService: CaseService,
    private caseFollowUpService: CaseFollowUpService,
    public helperService: HelperService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.$service = this.caseService;
    this.defaultColumns = tableDataDefault.defaultColumnDefs;
    this.legend = tableDataDefault.legendDefs;
    this.subscriptions.push(
      this.activeRoute.queryParams.subscribe((params: any) => {
        this.routeParams = params;
        this.presetFilters = this.helperService.setQueryParamsInFilters(this.routeParams);
      })
    );
    this.subscriptions.push(
      this.filterService
        .getFilters()
        .pipe(filter(({ formId }) => formId === this.formIdFilters))
        .subscribe(({ filters }) => this.updateFollowUpTable(filters))
    );
  }

  changeOptionView(event: any): void {
    this.localStorageService.remove(this.configKey);
    this.showTable = false;
    this.tableView = event;
    switch (event) {
      case ACTIONS_VIEW_OPTIONS.DETAILED:
        this.$service = this.caseService;
        this.legend = tableDataDetailed.legendDefs;
        this.defaultColumns = tableDataDetailed.defaultColumnDefs;
        break;
      case ACTIONS_VIEW_OPTIONS.FOLLOW_UP:
        this.$service = this.caseFollowUpService;
        this.legend = tableDataFollowUp.legendDefs;
        this.defaultColumns = this.generateFollowUpColumns();
        break;
      case ACTIONS_VIEW_OPTIONS.DEFAULT:
      default:
        this.$service = this.caseService;
        this.legend = tableDataDefault.legendDefs;
        this.defaultColumns = tableDataDefault.defaultColumnDefs;
    }
    setTimeout(() => {
      this.showTable = true;
    });
  }

  openAddCaseModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('captions.caseCreateNew'),
        component: CaseAddComponent,
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

  openImportModal(): void {
    this.dialog.open(CaseImportComponent, {
      width: CASE_IMPORT_MODAL_WIDTH,
    });
  }

  onActionSelected(event: any): void {
    switch (event) {
      case ACTIONS_CASE.BASIC_EXPORT:
        break;
      case ACTIONS_CASE.DETAILED_EXPORT:
        break;
      case ACTIONS_CASE.CASE_EXPORT:
        break;
      case ACTIONS_CASE.SAMPLE_EXPORT:
        break;
      case ACTIONS_CASE.CUSTOM_EXPORT:
        this.exportCustomCase();
        break;
      case ACTIONS_CASE.LINE_LISTING:
        break;
      case ACTIONS_CASE.CASE_GUIDE:
        break;
      case ACTIONS_CASE.MERGE_DUPLICATES:
        break;
      default:
        break;
    }
  }

  exportCustomCase(): void {
    this.dialog.open(CustomCaseExportComponent, {
      width: CASE_EXPORT_CUSTOM_MODAL_WIDTH,
    });
  }

  updateFollowUpTable(filters?: Filter[]): void {
    this.defaultColumns = this.generateFollowUpColumns(filters);
  }

  generateFollowUpColumns(filters?: Filter[]): TableColumn[] {
    const base = tableDataFollowUp.defaultColumnDefs;
    const result = [...base];
    const from = filters?.[0] ? filters[0].value : this.from;
    const interval = filters?.[1] ? filters[1].value : PERIOD_PICKER_DEFAULT_RANGE;
    for (let i = 0; i < interval; i += 1) {
      result.push({
        name: format(addDays(from, i), 'd/M/yyyy'),
        dataKey: `visitResults[${i}].status`,
        isSortable: true,
        iconify: 'LegendFollowUpIcons',
        format: {
          type: TableDataFormatOptions.DISPLAY,
          pattern: ' ',
          params: [],
        },
      });
    }
    return result;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriptions) => subscriptions.unsubscribe());
  }
}
