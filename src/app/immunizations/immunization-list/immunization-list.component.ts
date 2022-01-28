import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { TableColumn } from '../../_models/common';
import { CONFIG_IMMUNIZATIONS } from '../../_constants/storage';
import { ADD_MODAL_MAX_WIDTH, HEADER_HEIGHT } from '../../_constants/common';
import { IMMUNIZATION_FILTERS_FORM_ID } from '../../_constants/form-identifiers';
import { HelperService } from '../../_services/helper.service';
import { ImmunizationDto } from '../../_models/immunizationDto';
import { ImmunizationService } from '../../_services/api/immunization.service';
import { FORM_DATA_IMMUNIZATION_FILTERS } from '../immunization-filters/immunization-filters-form-data';
import { defaultColumnDefs } from './immunization-list-table-data';
import { AddEditBaseModalComponent } from '../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';
import { ImmunizationAddComponent } from '../immunization-add/immunization-add.component';
import { PickPersonModalComponent } from '../../shared/modals/pick-person-modal/pick-person-modal.component';

@Component({
  selector: 'app-immunization-list',
  templateUrl: './immunization-list.component.html',
  styleUrls: ['./immunization-list.component.scss'],
})
export class ImmunizationListComponent implements OnInit, OnDestroy {
  filtersData: FormBase<any>[] = JSON.parse(JSON.stringify(FORM_DATA_IMMUNIZATION_FILTERS));
  immunizations: ImmunizationDto[] = [];
  defaultColumns: TableColumn[] = [];
  configKey = CONFIG_IMMUNIZATIONS;
  headerHeight = HEADER_HEIGHT;
  formIdFilters = IMMUNIZATION_FILTERS_FORM_ID;

  private subscriptions: Subscription[] = [];

  constructor(
    public immunizationService: ImmunizationService,
    public helperService: HelperService,
    private translateService: TranslateService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.defaultColumns = defaultColumnDefs;
  }

  openAddImmunizationModal(): void {
    this.openPickPersonModal();
    return;
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('addImmunization'),
        component: ImmunizationAddComponent,
      },
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
          this.openPickPersonModal();
        }
      })
    );
  }

  openPickPersonModal(): void {
    const data = {
      info: this.translateService.instant('strings.infoSelectOrCreatePersonForImmunization'),
      person: {
        firstName: 'dani',
        lastName: 'rus',
        sex: 'MALE',
      },
    };
    const dialogRef = this.dialog.open(PickPersonModalComponent, {
      width: ADD_MODAL_MAX_WIDTH,
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data,
    });

    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          // callback
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
