import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { Filter } from '../../../_models/common';
import { CaseDataDto, PrescriptionDto, TherapyDto, TreatmentDto } from '../../../_models/models';
import { PrescriptionService } from '../../../_services/api/prescription.service';
import { TreatmentService } from '../../../_services/api/treatment.service';
import { NotificationService } from '../../../_services/notification.service';

@Component({
  selector: 'app-case-therapy',
  templateUrl: './case-therapy.component.html',
  styleUrls: ['./case-therapy.component.scss'],
})
export class CaseTherapyComponent implements OnDestroy {
  therapy: TherapyDto;
  prescriptions: PrescriptionDto[];
  filteredPrescriptions: PrescriptionDto[];
  treatments: TreatmentDto[];
  filteredTreatments: TreatmentDto[];
  formElementsPrescriptions: FormBase<any>[] = [];
  formElementsTreatments: FormBase<any>[] = [];
  caseFilters: Filter[] = [];
  subscriptions: Subscription[] = [];
  loadPrescriptions = false;
  loadTreatments = false;

  constructor(
    private prescriptionService: PrescriptionService,
    private treatmentService: TreatmentService,
    private notificationService: NotificationService,
    private translateService: TranslateService
  ) {}

  updateComponent(caseItem: CaseDataDto): void {
    if (caseItem.therapy?.uuid) {
      this.caseFilters = [
        {
          field: 'therapy',
          value: caseItem.therapy.uuid,
        },
      ];

      this.fetchPrescriptions();
      this.fetchTreatments();
    }
  }

  fetchPrescriptions(): void {
    this.loadPrescriptions = true;
    this.subscriptions.push(
      this.prescriptionService
        .getAll({ offset: null, size: null }, false, this.caseFilters, false)
        .subscribe({
          next: (response: any) => {
            this.prescriptions = response || [];
            this.filteredPrescriptions = this.prescriptions.slice();
            this.loadPrescriptions = false;
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.prescriptions = [];
            this.loadPrescriptions = false;
          },
          complete: () => {},
        })
    );
  }

  fetchTreatments(): void {
    this.loadTreatments = true;
    this.subscriptions.push(
      this.treatmentService
        .getAll({ offset: null, size: null }, false, this.caseFilters, false)
        .subscribe({
          next: (response: any) => {
            this.treatments = response || [];
            this.filteredTreatments = this.treatments.slice();
            this.loadTreatments = false;
          },
          error: (err: any) => {
            this.notificationService.error(err);
            this.treatments = [];
            this.loadTreatments = false;
          },
          complete: () => {},
        })
    );
  }

  filterPrescriptionList(filters: any): void {
    this.filteredPrescriptions = filters.length
      ? this.prescriptions.filter((item: PrescriptionDto) => {
          const type = item.prescriptionType?.split(' - ')[0];
          const details = item.prescriptionType?.split(' - ')[1];
          const clinician = item.prescribingClinician;
          let result = false;
          filters.forEach(({ field, value }: Filter) => {
            if (field === 'type') {
              result = type === this.translateService.instant(`enum.TreatmentType.${value}`);
            }
            if (field === 'details') {
              result = !!details?.includes(value) || !!clinician?.includes(value);
            }
          });
          return result;
        })
      : this.prescriptions.slice();
  }

  filterTreatmentList(filters: any): void {
    this.filteredTreatments = filters.length
      ? this.treatments.filter((item: TreatmentDto) => {
          const type = item.treatmentType?.split(' - ')[0];
          const details = item.treatmentType?.split(' - ')[1];
          const clinician = item.executingClinician;
          let result = false;
          filters.forEach(({ field, value }: Filter) => {
            if (field === 'type') {
              result = type === this.translateService.instant(`enum.TreatmentType.${value}`);
            }
            if (field === 'details') {
              result = !!details?.includes(value) || !!clinician?.includes(value);
            }
          });
          return result;
        })
      : this.treatments.slice();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
