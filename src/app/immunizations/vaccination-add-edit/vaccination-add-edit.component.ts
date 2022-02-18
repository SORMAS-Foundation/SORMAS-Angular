import { AfterViewInit, Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBase } from '../../shared/dynamic-form/types/form-element-base';
import { ContinentDto } from '../../_models/continentDto';
import * as data from './vaccination-add-edit-form-data';
import { VACCINATION_ADD_EDIT_FORM_ID } from '../../app.constants';
import { VaccinationService } from '../../_services/api/vaccination.service';

@Component({
  selector: 'app-vaccination-add-edit',
  templateUrl: './vaccination-add-edit.component.html',
  styleUrls: ['./vaccination-add-edit.component.scss'],
})
export class VaccinationAddEditComponent implements AfterViewInit, OnDestroy {
  @Input() selectedResource: ContinentDto;
  public formData: FormBase<any>[] = data.FORM_DATA_VACCINATION_ADD_EDIT;
  formId = VACCINATION_ADD_EDIT_FORM_ID;
  subscriptions: Subscription[] = [];
  @ViewChild('form') dynamicForm: any;

  constructor(public vaccinationService: VaccinationService) {}

  ngAfterViewInit(): void {
    const { form } = this.dynamicForm;
    if (form) {
      const vaccineName = form.get('vaccineName');
      const vaccineManufacturer = form.get('vaccineManufacturer');

      this.subscriptions.push(
        vaccineName.valueChanges.subscribe((val: string) => {
          switch (val) {
            case 'COMIRNATY':
              vaccineManufacturer.setValue('BIONTECH_PFIZER');
              break;
            case 'MRNA_1273':
              vaccineManufacturer.setValue('MODERNA');
              break;
            case 'OXFORD_ASTRA_ZENECA':
              vaccineManufacturer.setValue('ASTRA_ZENECA');
              break;
            case 'AD26_COV2_S':
              vaccineManufacturer.setValue('JOHNSON_JOHNSON');
              break;
            case 'NVX_COV_2373':
              vaccineManufacturer.setValue('NOVAVAX');
              break;
            case 'SANOFI_GSK':
              vaccineManufacturer.setValue('SANOFI_GSK');
              break;
            case 'UNKNOWN':
            case 'OTHER':
              vaccineManufacturer.setValue('');
              break;
            default:
              break;
          }
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
