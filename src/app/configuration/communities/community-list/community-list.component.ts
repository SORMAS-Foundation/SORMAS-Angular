import {Component, OnDestroy, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { CONFIGURATION_MODAL_WIDTH } from '../../../_constants/common';
import { TableAppearanceOptions } from '../../../_constants/enums';
import { NavItem, TableColumn } from '../../../_models/common';
import { CommunityDto } from '../../../_models/communityDto';
import { CommunityService } from '../../../_services/api/community.service';
import { CommunityAddEditComponent } from '../community-add-edit/community-add-edit.component';
import { actionsBulkEditDefs } from './communities-actions-data';
import { defaultColumnDefs } from './communities-table-data';
import { TableComponent } from '../../../shared/table/table.component';
import { CONFIGURATION_COMMUNITY_FILTERS_FORM_ID } from '../../../_constants/form-identifiers';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.scss'],
})
export class CommunityListComponent implements OnDestroy {
  defaultColumns: TableColumn[] = defaultColumnDefs;
  actionsBulkEdit: NavItem[] = actionsBulkEditDefs;
  tableAppearanceOptions = TableAppearanceOptions;
  formId = CONFIGURATION_COMMUNITY_FILTERS_FORM_ID;

  private subscription: Subscription[] = [];

  @ViewChild(TableComponent) tableComponent: TableComponent;

  constructor(
    public communityService: CommunityService,
    private dialog: MatDialog,
    private translateService: TranslateService
  ) {}

  openEditCommunityModal(community: CommunityDto): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('headingEditCommunity'),
        component: CommunityAddEditComponent,
        resource: community,
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

  openAddCommunityModal(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: CONFIGURATION_MODAL_WIDTH,
      data: {
        title: this.translateService.instant('actionAddNewCommunity'),
        component: CommunityAddEditComponent,
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
