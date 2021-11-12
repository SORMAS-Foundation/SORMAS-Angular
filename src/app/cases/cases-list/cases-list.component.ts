import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { CaseService } from '../../_services/api/case.service';
import { NavItem, TableColumn } from '../../_models/common';
import { defaultColumnDefs } from './case-list-table-data';
import { CaseDataDto } from '../../_models/caseDataDto';
import { CONFIG_CASES } from '../../_constants/storage';
import {
  HEADER_HEIGHT,
  ADD_MODAL_MAX_WIDTH,
  CASE_EXPORT_CUSTOM_MODAL_WIDTH,
  CASE_IMPORT_MODAL_WIDTH,
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
import { FormActionsService } from '../../_services/form-actions.service';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { CaseAddComponent } from '../../shared/case-add/case-add.component';
import { FORM_DATA_CASE_FILTERS } from '../case-filters/case-filters-form-data';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_CASE_FILTERS));
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  headerHeight = HEADER_HEIGHT;
  actionsMore: NavItem[] = actionsMoreDefs;
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  routeParams: Params;
  formId = 'caseFilters';

  private subscription: Subscription[] = [];

  constructor(
    public caseService: CaseService,
    public helperService: HelperService,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
    this.subscription.push(
      this.activeRoute.queryParams.subscribe((params: any) => {
        this.routeParams = params;
      })
    );
  }

  openAddCaseModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('captions.caseCreateNew'),
        component: CaseAddComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard('caseAdd');
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
  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
