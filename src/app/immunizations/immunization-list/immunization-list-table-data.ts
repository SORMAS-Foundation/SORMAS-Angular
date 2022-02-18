import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Immunization.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/immunizations/immunization/$param1/profile',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Immunization.personUuid',
    dataKey: 'personUuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1',
      params: ['personUuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Immunization.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.ageAndBirthDate',
    dataKey: 'age',
    isSortable: true,
  },
  {
    name: 'captions.sex',
    dataKey: 'sex',
    translationName: 'Sex',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.responsibleDistrict',
    dataKey: 'responsibleDistrict.caption',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.meansOfImmunization',
    dataKey: 'meansOfImmunization',
    translationName: 'MeansOfImmunization',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.immunizationManagementStatus',
    dataKey: 'immunizationManagementStatus',
    translationName: 'ImmunizationManagementStatus',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.immunizationStatus',
    dataKey: 'immunizationStatus',
    translationName: 'ImmunizationStatus',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.startDate',
    dataKey: 'startDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.Immunization.endDate',
    dataKey: 'endDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.Immunization.lastVaccineType',
    dataKey: 'lastVaccineType',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.recoveryDate',
    dataKey: 'recoveryDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
];
