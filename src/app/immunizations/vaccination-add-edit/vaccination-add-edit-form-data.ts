import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT, FORM_DATA_TEXTAREA,
} from '../../_constants/form-data';
import {
  Trimester,
  VaccinationInfoSource,
  VaccineManufacturer,
  VaccineName,
  YesNoUnknown,
} from '../../_constants/enums';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const yesNoUnknown = pipe.transform(YesNoUnknown);
const vaccineNameOptions = pipe.transform(VaccineName);
const vaccineManufacturerOptions = pipe.transform(VaccineManufacturer);
const vaccineInfoSourceOptions = pipe.transform(VaccinationInfoSource);
const optionsTrimester = pipe.transform(Trimester);

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
        options: vaccineNameOptions,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineNameDetails',
        label: 'captions.Vaccination.otherVaccineName',
        dependingOn: 'vaccineName',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        newLine: true,
        label: 'captions.Vaccination.vaccineManufacturer',
        options: vaccineManufacturerOptions,
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
        options: vaccineInfoSourceOptions,
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
        options: optionsTrimester,
        newLine: true,
        dependingOn: 'pregnancy',
        dependingOnValues: ['YES'],
      },
    ],
  },
  {
    id: 'preExistingConditions',
    title: 'strings.headingHealthConditions',
    fields: [
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.tuberculosis',
        key: 'tuberculosis',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicHeartFailure',
        key: 'chronicHeartFailure',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.asplenia',
        key: 'asplenia',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicPulmonaryDisease',
        key: 'chronicPulmonaryDisease',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.hepatitis',
        key: 'hepatitis',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicKidneyDisease',
        key: 'renalDisease',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.diabetes',
        key: 'diabetes',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicNeurologicCondition',
        key: 'chronicNeurologicCondition',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.immunodeficiencyOtherThanHiv',
        key: 'immunodeficiencyOtherThanHiv',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.cardiovascularDiseaseIncludingHypertension',
        key: 'cardiovascularDiseaseIncludingHypertension',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.hiv',
        key: 'hiv',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.obesity',
        key: 'obesity',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.hivArt',
        key: 'hivArt',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
        dependingOn: 'hiv',
        dependingOnValues: ['YES'],
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.currentSmoker',
        key: 'currentSmoker',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.congenitalSyphilis',
        key: 'congenitalSyphilis',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.formerSmoker',
        key: 'formerSmoker',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.downSyndrome',
        key: 'downSyndrome',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.asthma',
        key: 'asthma',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.chronicLiverDisease',
        key: 'chronicLiverDisease',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.sickleCellDisease',
        key: 'sickleCellDisease',
        options: yesNoUnknown,
        className: 'medium-text-radio',
      },
      {
        ...FORM_DATA_RADIO,
        label: 'captions.HealthConditions.malignancyChemotherapy',
        key: 'malignancyChemotherapy',
        options: yesNoUnknown,
        className: 'medium-text-radio',
        newLine: true,
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'captions.HealthConditions.otherConditions',
        newLine: true,
      },
    ],
  },
];
