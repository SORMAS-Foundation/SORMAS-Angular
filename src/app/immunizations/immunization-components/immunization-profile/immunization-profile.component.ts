import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import * as data from './immunization-profile-form-data';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { BaseService } from '../../../_services/api/base.service';
import { ADD_MODAL_MAX_WIDTH, IMMUNIZATION_PROFILE_FORM_ID } from '../../../app.constants';
import { ImmunizationDto } from '../../../_models/immunizationDto';
import { SampleService } from '../../../_services/api/sample.service';
import { ImmunizationAddComponent } from '../../immunization-add/immunization-add.component';
import { VaccinationAddEditComponent } from '../../vaccination-add-edit/vaccination-add-edit.component';
import { AddEditBaseModalComponent } from '../../../shared/modals/add-edit-base-modal/add-edit-base-modal.component';

@Component({
  selector: 'app-immunization-profile',
  templateUrl: './immunization-profile.component.html',
  styleUrls: ['./immunization-profile.component.scss'],
})
export class ImmunizationProfileComponent implements AfterViewInit, OnDestroy {
  myFormElements: FormBase<any>[] = [];
  formData: FormBase<any>[] = data.FORM_DATA_IMMUNIZATION_PROFILE;
  formId = IMMUNIZATION_PROFILE_FORM_ID;
  immunization: ImmunizationDto;

  public resourceService: BaseService<any>;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(
    private formElementControlService: FormElementControlService,
    public sampleService: SampleService,
    private dialog: MatDialog,
    private translateService: TranslateService,
  ) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const immunizationManagementOverwrite = form.get('immunizationManagementOverwrite');
      const immunizationManagementStatus = form.get('immunizationManagementStatus');
      const immunizationStatus = form.get('immunizationStatus');
      const meansOfImmunization = form.get('meansOfImmunization');

      this.subscriptions.push(
        immunizationManagementOverwrite.valueChanges.subscribe((val: boolean) => {
          if (val) {
            immunizationManagementStatus.enable();
          } else {
            immunizationManagementStatus.disable();
          }
        })
      );

      this.subscriptions.push(
        immunizationManagementStatus.valueChanges.subscribe((val: string) => {
          if (val === 'SCHEDULED' || val === 'ONGOING') {
            immunizationStatus.setValue('PENDING');
          }
          if (val === 'COMPLETED') {
            immunizationStatus.setValue('ACQUIRED');
          }
          if (val === 'CANCELED') {
            immunizationStatus.setValue('NOT_ACQUIRED');
          }
        })
      );

      this.subscriptions.push(
        meansOfImmunization.valueChanges.subscribe((val: string) => {
          if (val === 'RECOVERY' || val === 'VACCINATION_RECOVERY') {
            this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
              this.myFormElements,
              'recovery',
              'hidden',
              false
            );
          } else {
            this.myFormElements = this.formElementControlService.setAttributeToGroupElement(
              this.myFormElements,
              'recovery',
              'hidden',
              true
            );
          }
        })
      );
    }
  }

  updateComponent(immunizationItem: ImmunizationDto, resourceService: BaseService<any>): void {
    this.immunization = immunizationItem;
    this.resourceService = resourceService;

    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      immunizationItem,
      this.formData
    );
  }

  addVaccination(): void {
    const dialogRef = this.dialog.open(AddEditBaseModalComponent, {
      maxWidth: ADD_MODAL_MAX_WIDTH,
      data: {
        title: this.translateService.instant('addImmunization'),
        component: VaccinationAddEditComponent,
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

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
