import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import {
  ADD_MODAL_MAX_WIDTH,
  CONFIGURATION_ENTRY_POINT_FILTERS_FORM_ID,
  TableAppearanceOptions,
} from '../../../app.constants';
import { NavItem, TableColumn } from '../../../_models/common';
import { PointOfEntryDto } from '../../../_models/pointOfEntryDto';
import { EntryPointService } from '../../../_services/api/entry-point.service';
import { EntryPointsAddEditComponent } from '../entry-points-add-edit/entry-points-add-edit.component';
import { actionsBulkEditDefs } from './entry-points-actions-data';
import { defaultColumnDefs } from './entry-points-table-data';
import { TableComponent } from '../../../shared/table/table.component';

@Component({
  selector: 'app-entry-points-list',
  templateUrl: './entry-points-list.component.html',
  styleUrls: ['./entry-points-list.component.scss'],
})
export class EntryPointsListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_ENTRY_POINT_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public entryPointService: EntryPointService,
    private dialog: MatDialog,
    private translateService: TranslateService
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
        if (result) {
          this.tableComponent.getResources(true);
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
