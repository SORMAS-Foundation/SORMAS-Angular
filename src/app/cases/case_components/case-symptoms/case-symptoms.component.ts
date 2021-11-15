import { Component } from '@angular/core';
import { CASE_SYMPTOMS_FORM_ID } from '../../../app.constants';
import { FormBase } from '../../../shared/dynamic-form/types/form-element-base';
import { CaseDataDto } from '../../../_models/caseDataDto';
import { BaseService } from '../../../_services/api/base.service';
import { FormElementControlService } from '../../../_services/form-element-control.service';
import * as data from './case-symptoms-form-data';

enum SymptomsMap {
  chillsSweats = 'Chill or sweats',
  headache = 'Headache',
  fever = 'Fever',
  musclePain = 'Muscle pain',
  shivering = 'Shivering',
  feelingIll = 'Feeling ill',
  soreThroat = 'Sore throat',
  runnyNose = 'Runny nose',
  cough = 'Cough',
  difficultyBreathing = 'Difficulty breathing / Dyspnea',
  rapidBreathing = 'Rapid breathing',
  pneumoniaClinicalOrRadiologic = 'Pneumonia (clinical or radiologic)',
  oxygenSaturationLower94 = 'Oxygen saturation < 94%',
  respiratoryDiseaseVentilation = 'Respiratory disease requiring ventilation',
  acuteRespiratoryDistressSyndrome = 'Acute respiratory distress syndrome',
  fastHeartRate = 'Fast hearth rate (Tachycardia)',
  diarrhea = 'Diarrhea',
  nausea = 'Nausea',
  lossOfSmell = 'New loss of smell',
  lossOfTaste = 'New loss of taste',
  otherComplications = 'Other clinical symptoms',
}

@Component({
  selector: 'app-case-symptoms',
  templateUrl: './case-symptoms.component.html',
  styleUrls: ['./case-symptoms.component.scss'],
})
export class CaseSymptomsComponent {
  myFormElements: FormBase<any>[] = [];
  formData = [...data.FORM_DATA_CASE_SYMPTOMS];
  formId = CASE_SYMPTOMS_FORM_ID;

  public resourceService: BaseService<any>;

  constructor(private formElementControlService: FormElementControlService) {}

  updateComponent(caseItem: CaseDataDto, resourceService: BaseService<any>): void {
    const symptoms = this.pickSelectedSymptoms(caseItem.symptoms);
    this.updateFirstSymptom(symptoms);

    this.resourceService = resourceService;
    this.myFormElements = this.formElementControlService.setValuesForDynamicForm(
      caseItem,
      this.formData
    );
  }

  onFormChanged(event: any): void {
    const symptoms = this.pickSelectedSymptoms(event);
    this.updateFirstSymptom(symptoms);
  }

  pickSelectedSymptoms(obj: any): any[] {
    const result: any[] = [];
    Object.keys(obj).forEach((key) => {
      if (obj[key] === 'YES') {
        const symptomName = key.replace('symptoms.', '');
        result.push({
          key: SymptomsMap[symptomName as keyof typeof SymptomsMap],
          value: SymptomsMap[symptomName as keyof typeof SymptomsMap],
        });
      }
    });
    return result;
  }

  updateFirstSymptom(symptoms: any[]): void {
    const additionalDetailsSection = this.formData.find((item) => {
      return item.id === 'details';
    });
    const onsetSymptomField = (additionalDetailsSection?.fields as any[]).find((item) => {
      return item.key.includes('onsetSymptom');
    });
    onsetSymptomField.options = symptoms;
  }
}
