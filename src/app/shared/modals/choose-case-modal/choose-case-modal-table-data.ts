import { TableColumn, TableDataFormatOptions } from '../../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'captions.CaseData.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.personAgeAndBirthdate',
    dataKey: 'age',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 ($param2/$param3/$param4)',
      params: [
        'ageAndBirthDate.age',
        'ageAndBirthDate.dateOfBirthDD',
        'ageAndBirthDate.dateOfBirthMM',
        'ageAndBirthDate.dateOfBirthYYYY',
      ],
    },
  },
  {
    name: 'captions.CaseData.responsibleDistrict',
    dataKey: 'responsibleDistrictName',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.healthFacilityName',
    dataKey: 'healthFacilityName',
    isSortable: true,
  },
  {
    name: 'captions.sex',
    dataKey: 'sex',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.caseClassification',
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.outcome',
    dataKey: 'outcome',
    isSortable: true,
  }
];
