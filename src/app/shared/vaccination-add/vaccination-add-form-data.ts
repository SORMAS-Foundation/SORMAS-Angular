import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  VaccineName,
  VaccineManufacturer,
  VaccinationInfoSource,
} from '../../app.constants';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsVaccineName = pipe.transform(VaccineName);
const optionsVaccineManufacturer = pipe.transform(VaccineManufacturer);
const optionsVaccinationInfoSource = pipe.transform(VaccinationInfoSource);

export const FORM_DATA_VACCINATION_ADD = [
  {
    id: 'reportDate',
    title: 'report',
    required: true,
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.Vaccination.reportDate',
        key: 'reportDate',
        validation: ['required'],
      },
    ],
  },
  {
    id: 'vaccination',
    title: 'captions.Vaccination',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.Vaccination.vaccinationDate',
        key: 'vaccinationDate',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: 'captions.Vaccination.vaccineName',
        options: optionsVaccineName,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'otherVaccineName',
        label: 'captions.Vaccination.otherVaccineName',
        dependingOn: 'vaccineName',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: 'captions.Vaccination.vaccineManufacturer',
        options: optionsVaccineManufacturer,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'otherVaccineManufacturer',
        label: 'captions.Vaccination.otherVaccineManufacturer',
        dependingOn: 'vaccineManufacturer',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineType',
        label: 'captions.Vaccination.vaccineType',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'captions.Vaccination.vaccinationInfoSource',
        options: optionsVaccinationInfoSource,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineDose',
        label: 'captions.Vaccination.vaccineDose',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: 'captions.Vaccination.vaccineInn',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'captions.Vaccination.vaccineBatchNumber',
      },
      {
        ...FORM_DATA_INPUT,
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
];
