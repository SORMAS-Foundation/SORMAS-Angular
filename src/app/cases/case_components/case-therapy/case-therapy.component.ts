import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { SentResourceTypes } from '../../../_constants/common';
import { CaseDataDto, PrescriptionDto, TherapyDto, TreatmentDto } from '../../../_models/models';
import { PrescriptionService } from '../../../_services/api/prescription.service';
import { TreatmentService } from '../../../_services/api/treatment.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import { NotificationService } from '../../../_services/notification.service';
import { SendResourceService } from '../../../_services/send-resource.service';
import * as data from './case-therapy-form-data';

@Component({
  selector: 'app-case-therapy',
  templateUrl: './case-therapy.component.html',
  styleUrls: ['./case-therapy.component.scss'],
})
export class CaseTherapyComponent {
  therapy: TherapyDto;
  prescription: PrescriptionDto;
  treatment: TreatmentDto;
  formElementsPrescriptions: FormBase<any>[] = [];
  formElementsTreatments: FormBase<any>[] = [];
  formDataPrescriptions = data.FORM_DATA_CASE_THERAPY_PRESCRIPTIONS;
  formDataTreatments = data.FORM_DATA_CASE_THERAPY_TREATMENTS;

  constructor(
    private formElementControlService: FormElementControlService,
    private prescriptionService: PrescriptionService,
    private treatmentService: TreatmentService,
    private notificationService: NotificationService,
    private sendResourceService: SendResourceService
  ) {}

  setPrescriptionFormData(): void {
    this.formElementsPrescriptions = this.formElementControlService.setValuesForDynamicForm(
      this.prescription,
      this.formDataPrescriptions
    );
  }

  setTreatmentFormData(): void {
    this.formElementsTreatments = this.formElementControlService.setValuesForDynamicForm(
      this.treatment,
      this.formDataTreatments
    );
  }

  updateComponent(caseItem: CaseDataDto): void {
    if (caseItem.therapy?.uuid) {
      const prescriptionTreatmentFilters = [
        {
          field: 'therapy',
          value: caseItem.therapy.uuid,
        },
      ];
      this.prescriptionService
        .getAll({ offset: null, size: null }, false, prescriptionTreatmentFilters, false)
        .subscribe({
          next: (response: any) => {
            this.prescription = response || ({} as PrescriptionDto);
            this.setPrescriptionFormData();
            setTimeout(() => {
              this.sendResourceService.setResource(
                this.prescription,
                SentResourceTypes.PRESCRIPTION_DATA
              );
            });
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.prescription = {} as PrescriptionDto;
            this.setPrescriptionFormData();
          },
          complete: () => {},
        });

      this.treatmentService
        .getAll({ offset: null, size: null }, false, prescriptionTreatmentFilters, false)
        .subscribe({
          next: (response: any) => {
            this.treatment = response || ({} as TreatmentDto);
            this.setTreatmentFormData();
            setTimeout(() => {
              this.sendResourceService.setResource(
                this.treatment,
                SentResourceTypes.TREATMENT_DATA
              );
            });
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.treatment = {} as TreatmentDto;
            this.setTreatmentFormData();
          },
          complete: () => {},
        });
    }
  }
}
