import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
} from '../../app.constants';
import { AddBaseModalComponent } from '../../shared/modals/add-base-modal/add-base-modal.component';
import { CaseAddComponent } from '../case-add/case-add.component';
import { CustomCaseExportComponent } from '../custom-case-export/custom-case-export.component';
import {
  actionsMoreDefs,
  actionsViewOptionsDefs,
  actionsBulkEditDefs,
} from './case-list-actions-data';
import { ACTIONS_CASE } from '../../_constants/actions';

@Component({
  selector: 'app-cases-list',
  templateUrl: './cases-list.component.html',
  styleUrls: ['./cases-list.component.scss'],
})
export class CasesListComponent implements OnInit, OnDestroy {
  cases: CaseDataDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_CASES;
  headerHeight = HEADER_HEIGHT;
  actionsMore: NavItem[] = actionsMoreDefs;
  actionsViewOptions: NavItem[] = actionsViewOptionsDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;

  private subscription: Subscription[] = [];

  constructor(
    public caseService: CaseService,
    private router: Router,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddCaseModal(): void {
    const dialogRef = this.dialog.open(AddBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('CaseData.addNewCase'),
        component: CaseAddComponent,
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
