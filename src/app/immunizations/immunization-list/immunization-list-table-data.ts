import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Immunization.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
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
    sticky: true,
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
    dataKey: 'ageAndBirthDate.age',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: [
        'ageAndBirthDate.age',
        'ageAndBirthDate.dateOfBirthMM',
        'ageAndBirthDate.dateOfBirthDD',
        'ageAndBirthDate.dateOfBirthYYYY',
      ],
      truncate: 6,
    },
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
    dataKey: 'managementStatus',
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
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Immunization.endDate',
    dataKey: 'endDate',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
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
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
];
