import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'immunizationId',
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
    name: 'captions.Person.uuid',
    dataKey: 'person.uui',
    isSortable: true,
  },
  {
    name: 'captions.firstName',
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'captions.lastName',
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: 'captions.disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'captions.personAgeAndBirthdate',
    dataKey: 'age',
    isSortable: true,
  },
  {
    name: 'captions.sex',
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: 'captions.district',
    dataKey: 'responsibleDistrict.caption',
    isSortable: true,
  },
  {
    name: 'meansOfImmunization',
    dataKey: 'meansOfImmunization',
    isSortable: true,
  },
  {
    name: 'immunizationManagementStatus',
    dataKey: 'immunizationManagementStatus',
    isSortable: true,
  },
  {
    name: 'immunizationStatus',
    dataKey: 'immunizationStatus',
    isSortable: true,
  },
  {
    name: 'startDate',
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: 'endDate',
    dataKey: 'endDate',
    isSortable: true,
  },
  {
    name: 'recoveryDate',
    dataKey: 'recoveryDate',
    isSortable: true,
  },
];
