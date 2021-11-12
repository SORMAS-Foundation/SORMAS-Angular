import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ADD_MODAL_MAX_WIDTH, ADD_EDIT_FORM_ID } from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { PointOfEntryDto } from '../../../_models/pointOfEntryDto';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { EntryPointsAddEditComponent } from '../entry-points-add-edit/entry-points-add-edit.component';
import { actionsBulkEditDefs } from './entry-points-actions-data';
import { defaultColumnDefs } from './entry-points-table-data';

@Component({
  selector: 'app-entry-points-list',
  templateUrl: './entry-points-list.component.html',
  styleUrls: ['./entry-points-list.component.scss'],
})
export class EntryPointsListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  private subscription: Subscription[] = [];

  constructor(
    public entryPointService: EntryPointService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  openEditEntryPointModal(entryPoint: PointOfEntryDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('headingEditEntryPoint'),
        component: EntryPointsAddEditComponent,
        resource: entryPoint,
        archive: true,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard(ADD_EDIT_FORM_ID);
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddEntryPointModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewEntryPoint'),
        component: EntryPointsAddEditComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard(ADD_EDIT_FORM_ID);
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
