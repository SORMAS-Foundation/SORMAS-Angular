import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { CONFIGURATION_MODAL_WIDTH } from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { ContinentDto } from '../../../_models/continentDto';
import { ContinentService } from '../../../_services/api/continent.service';
import { FormActionsService } from '../../../_services/form-actions.service';
import { ContinentAddEditComponent } from '../continent-add-edit/continent-add-edit.component';
import { actionsBulkEditDefs } from './continents-actions-data';
import { defaultColumnDefs } from './continents-table-data';

@Component({
  selector: 'app-continent-list',
  templateUrl: './continent-list.component.html',
  styleUrls: ['./continent-list.component.scss'],
})
export class ContinentListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;

  private subscription: Subscription[] = [];

  constructor(
    public continentService: ContinentService,
    private dialog: MatDialog,
    private translateService: TranslateService,
    private formActionsService: FormActionsService
  ) {}

  openEditContinentModal(continent: ContinentDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('headingEditContinent'),
        component: ContinentAddEditComponent,
        resource: continent,
        archive: true,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard();
        if (result) {
          // this.tableComponent.getResources(true);
        }
      })
    );
  }

  openAddContinentModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewContinent'),
        component: ContinentAddEditComponent,
      },
    });

    this.subscription.push(
      dialogRef.afterClosed().subscribe((result) => {
        this.formActionsService.setDiscard();
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
