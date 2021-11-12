import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NavItem, TableColumn } from '../../../_models/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { FacilityService } from '../../../_services/api/facility.service';
import { FacilityDto } from '../../../_models/facilityDto';
import { defaultColumnDefs } from './facilities-table-data';
import { actionsBulkEditDefs } from './facilities-actions-data';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ADD_MODAL_MAX_WIDTH, ADD_EDIT_FORM_ID } from '../../../_constants/common';
import { FacilityAddEditComponent } from '../facility-add-edit/facility-add-edit.component';
import { FormActionsService } from '../../../_services/form-actions.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.scss'],
})
export class FacilityListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  private subscription: Subscription[] = [];

  constructor(
    public facilityService: FacilityService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  openEditFacilityModal(facility: FacilityDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('actionEditFacility'),
        component: FacilityAddEditComponent,
        resource: facility,
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

  openAddFacilityModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewFacility'),
        component: FacilityAddEditComponent,
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
