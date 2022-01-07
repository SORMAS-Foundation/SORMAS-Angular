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
    dataKey: 'person.uui',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.personFirstName',
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.personLastName',
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.disease',
    dataKey: 'disease',
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
    isSortable: true,
  },
  {
    name: 'captions.Immunization.immunizationManagementStatus',
    dataKey: 'immunizationManagementStatus',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.immunizationStatus',
    dataKey: 'immunizationStatus',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.startDate',
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.endDate',
    dataKey: 'endDate',
    isSortable: true,
  },
  {
    name: 'captions.Immunization.recoveryDate',
    dataKey: 'recoveryDate',
    isSortable: true,
  },
];
