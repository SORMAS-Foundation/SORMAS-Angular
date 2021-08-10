import { Component } from '@angular/core';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseDataDto, PrescriptionDto, TherapyDto, TreatmentDto } from '../../../_models/models';
import { PrescriptionService } from '../../../_services/api/prescription.service';
import { TreatmentService } from '../../../_services/api/treatment.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-case-therapy',
  templateUrl: './case-therapy.component.html',
  styleUrls: ['./case-therapy.component.scss'],
})
export class CaseTherapyComponent {
  therapy: TherapyDto;
  prescriptions: PrescriptionDto[];
  treatments: TreatmentDto[];
  formElementsPrescriptions: FormBase<any>[] = [];
  formElementsTreatments: FormBase<any>[] = [];

  constructor(
    private prescriptionService: PrescriptionService,
    private treatmentService: TreatmentService,
    private notificationService: NotificationService
  ) {}

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
            this.prescriptions = response || [];
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.prescriptions = [];
          },
          complete: () => {},
        });

      this.treatmentService
        .getAll({ offset: null, size: null }, false, prescriptionTreatmentFilters, false)
        .subscribe({
          next: (response: any) => {
            this.treatments = response || [];
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.treatments = [];
          },
          complete: () => {},
        });
    }
  }
}
