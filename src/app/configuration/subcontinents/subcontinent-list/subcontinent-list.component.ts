import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  CONFIGURATION_MODAL_WIDTH,
  CONFIGURATION_SUBCONTINENT_FILTERS_FORM_ID,
} from '../../../app.constants';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { actionsBulkEditDefs } from './subcontinents-actions-data';
import { defaultColumnDefs } from './subcontinents-table-data';
import { SubcontinentService } from '../../../_services/api/subcontinent.service';
import { SubcontinentDto } from '../../../_models/subcontinentDto';
import { SubcontinentAddEditComponent } from '../subcontinent-add-edit/subcontinent-add-edit.component';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-subcontinent-list',
  templateUrl: './subcontinent-list.component.html',
  styleUrls: ['./subcontinent-list.component.scss'],
})
export class SubcontinentListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  private subscription: Subscription[] = [];

  formId = CONFIGURATION_SUBCONTINENT_FILTERS_FORM_ID;

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public subcontinentService: SubcontinentService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  openEditSubcontinentModal(subcontinent: SubcontinentDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('strings.headingEditSubcontinent'),
        component: SubcontinentAddEditComponent,
        resource: subcontinent,
        archive: true,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddSubcontinentModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewSubcontinent'),
        component: SubcontinentAddEditComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.tableComponent.getResources(true);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
