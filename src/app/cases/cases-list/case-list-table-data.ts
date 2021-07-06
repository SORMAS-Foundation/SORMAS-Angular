import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'CaseData.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'CaseData.diseaseVariant',
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: 'Contact.caze.caseClassification',
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: 'CaseData.outcome',
    dataKey: 'outcome',
    isSortable: true,
  },
  {
    name: 'CaseData.investigationStatus',
    dataKey: 'investigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: 'CaseData.personFirstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'CaseData.personLastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'CaseData.district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'CaseData.healthFacilityName',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: 'CaseData.pointOfEntry',
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: 'CaseData.reportDate',
    dataKey: 'reportDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'CaseData.quarantineTo',
    dataKey: 'quarantineTo',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'CaseData.followUpStatus',
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: 'CaseData.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
];
