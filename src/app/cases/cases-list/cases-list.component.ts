import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  EXPORT_CUSTOM_MODAL_WIDTH,
  CASE_IMPORT_MODAL_WIDTH,
  CASE_FILTERS_FORM_ID,
  ACTIONS_VIEW_OPTIONS,
  PERIOD_PICKER_DEFAULT_RANGE,
  CASE_LINE_LISTING_FORM_ID,
  SMALL_NOTIFICATION_MODAL_WIDTH,
  EXPORT_TYPE,
  EXPORT_TYPES,
  API_ROUTE_CASES,
} from '../../app.constants';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
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
import { LineListingAddComponent } from '../../shared/modals/line-listing-add-modal/line-listing-add.component';
import { FORM_DATA_LINE_LISTING_ADD } from './case-line-listing-add-form-data';
import { NotificationService } from '../../_services/notification.service';
import { CaseGuideComponent } from '../case-guide/case-guide.component';
import { FORM_DATA_EXPORT_CONFIGURATION } from './export-configuration-form-data';
import { CustomExportComponent } from '../../shared/modals/custom-export/custom-export.component';
import { ExportService } from '../../_services/api/export.service';

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
    private exportService: ExportService,
    private caseFollowUpService: CaseFollowUpService,
    public helperService: HelperService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private localStorageService: LocalStorageService,
    private filterService: FilterService,
    private notificationService: NotificationService,
    private router: Router
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
        .pipe(filter(() => this.tableView === ACTIONS_VIEW_OPTIONS.FOLLOW_UP))
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
        this.exportBasicCase();
        break;
      case ACTIONS_CASE.DETAILED_EXPORT:
        this.exportDetailedCase();
        break;
      case ACTIONS_CASE.CASE_EXPORT:
        this.exportManagementCase();
        break;
      case ACTIONS_CASE.SAMPLE_EXPORT:
        this.exportSampleCase();
        break;
      case ACTIONS_CASE.CUSTOM_EXPORT:
        this.exportCustomCase();
        break;
      case ACTIONS_CASE.LINE_LISTING:
        this.addLineListing();
        break;
      case ACTIONS_CASE.CASE_GUIDE:
        this.openCaseGuide();
        break;
      case ACTIONS_CASE.MERGE_DUPLICATES:
        this.router.navigate(['/merge-duplicates/list/cases']);
        break;
      default:
        break;
    }
  }

  exportCustomCase(): void {
    this.dialog.open(CustomExportComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
      data: {
        exportType: EXPORT_TYPE.CASE,
        exportFormData: FORM_DATA_EXPORT_CONFIGURATION,
      },
    });
  }

  exportBasicCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportBasic'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.BASIC, API_ROUTE_CASES.EXPORT);
  }

  exportDetailedCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportDetailed'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.DETAILED, API_ROUTE_CASES.EXPORT);
  }

  exportManagementCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportCaseManagement'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.CASE_MANAGEMENT, API_ROUTE_CASES.EXPORT);
  }

  exportSampleCase(): void {
    this.notificationService.prompt({
      title: this.translateService.instant('captions.exportSamples'),
      message: this.translateService.instant('strings.infoDownloadExport'),
      maxWidth: SMALL_NOTIFICATION_MODAL_WIDTH,
    });

    this.exportService.executeExport(EXPORT_TYPES.SAMPLE, API_ROUTE_CASES.EXPORT);
  }

  addLineListing(): void {
    const dialogRef = this.dialog.open(LineListingAddComponent, {
      width: ADD_MODAL_MAX_WIDTH,
      maxWidth: `calc(${ADD_MODAL_MAX_WIDTH} - 16px)`,
      data: {
        formId: CASE_LINE_LISTING_FORM_ID,
        formData: FORM_DATA_LINE_LISTING_ADD,
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
        align: 'center',
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

  openCaseGuide(): void {
    this.dialog.open(CaseGuideComponent, {
      width: EXPORT_CUSTOM_MODAL_WIDTH,
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscriptions) => subscriptions.unsubscribe());
  }
}
