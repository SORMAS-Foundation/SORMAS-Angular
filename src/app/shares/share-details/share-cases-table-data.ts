import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnCasesDefs: TableColumn[] = [
  {
    name: 'captions.CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'captions.CaseData.reportDate',
    dataKey: 'district.reportDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.columnDiseaseShort',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.caseClassification',
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.investigationStatus',
    dataKey: 'investigationStatus',
    isSortable: true,
    iconify: 'IconsMap',
  },
  {
    name: 'captions.CaseData.outcome',
    dataKey: 'outcome',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasPerson.personName',
    dataKey: 'person.firstName',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1 $param2',
      params: ['person.firstName', 'person.lastName'],
    },
  },
  {
    name: 'captions.SormasToSormasPerson.birthdDate',
    dataKey: 'person.birthdateDD',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1/$param2/$param3',
      params: ['person.birthdateMM', 'person.birthdateDD', 'person.birthdateYYYY'],
    },
  },
  {
    name: 'captions.SormasToSormasPerson.sex',
    dataKey: 'person.sex',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasPerson.address',
    dataKey: 'person.address.city',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2, $param3, $param4',
      params: [
        'person.address.city.city',
        'person.address.city.street',
        'person.address.city.region',
        'person.address.city.district',
      ],
    },
  },
  {
    name: 'captions.CaseData.region',
    dataKey: 'region.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.community',
    dataKey: 'community.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.healthFacility',
    dataKey: 'facility.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.pointOfEntry',
    dataKey: 'pointOfEntry',
    isSortable: true,
  },
  {
    name: 'CaseData.onsetDate',
    dataKey: 'onsetDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
];
