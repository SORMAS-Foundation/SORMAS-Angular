import {FORM_DATA_DATE, FORM_DATA_INPUT, FORM_DATA_RADIO, FORM_DATA_SELECT, FORM_DATA_TEXTAREA} from '../../_constants/form-data';
import { YesNoUnknown } from '../../_constants/enums';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const yesNoUnknown = pipe.transform(YesNoUnknown);

export const FORM_DATA_VACCINATION_ADD_EDIT = [
  {
    id: 'report',
    title: 'report',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'reportDate',
        label: 'captions.Immunization.reportDate',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'vaccination',
    title: 'strings.headingVaccination',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'vaccinationDate',
        label: 'captions.Vaccination.vaccinationDate',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        newLine: true,
        label: 'captions.Vaccination.vaccineName',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineNameDetails',
        label: 'captions.Vaccination.otherVaccineName',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        newLine: true,
        label: 'captions.Vaccination.vaccineManufacturer',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'otherVaccineManufacturer',
        label: 'captions.Vaccination.otherVaccineManufacturer',
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'vaccineType',
        label: 'captions.Vaccination.vaccineType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'captions.Vaccination.vaccinationInfoSource',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'vaccineDose',
        label: 'captions.Vaccination.vaccineDose',
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'vaccineInn',
        label: 'captions.Vaccination.vaccineInn',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'captions.Vaccination.vaccineBatchNumber',
      },
      {
        ...FORM_DATA_INPUT,
        newLine: true,
        key: 'vaccineUniiCode',
        label: 'captions.Vaccination.vaccineUniiCode',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: 'captions.Vaccination.vaccineAtcCode',
      },
    ],
  },
  {
    id: 'additionalMedialInformation',
    title: 'strings.headingMedicalInformation',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'pregnancy',
        label: 'pregnancy',
        options: yesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'trimester',
        label: 'Vaccination.trimester',
        options: yesNoUnknown,
        newLine: true,
      },
    ],
  },
  {
    id: 'preExistingConditions',
    title: 'strings.headingHealthConditions',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'diabetes',
        label: 'captions.HealthConditions.diabetes',
        options: yesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'chronicPulmonaryDisease',
        label: 'captions.HealthConditions.chronicPulmonaryDisease',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'chronicKidneyDisease',
        label: 'captions.HealthConditions.chronicKidneyDisease',
        options: yesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'immunodeficiencyOtherThanHiv',
        label: 'captions.HealthConditions.immunodeficiencyOtherThanHiv',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'chronicLiverDisease',
        label: 'captions.HealthConditions.chronicLiverDisease',
        options: yesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'chronicNeurologicCondition',
        label: 'captions.HealthConditions.chronicNeurologicCondition',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'malignancyChemotherapy',
        label: 'captions.HealthConditions.malignancyChemotherapy',
        options: yesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'cardiovascularDiseaseIncludingHypertension',
        label: 'captions.HealthConditions.cardiovascularDiseaseIncludingHypertension',
        options: yesNoUnknown,
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'otherConditions',
        label: 'captions.HealthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
