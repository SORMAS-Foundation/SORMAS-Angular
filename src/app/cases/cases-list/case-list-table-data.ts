import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    linkPattern: '/cases/case/$param1/details',
    linkParams: ['uuid'],
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
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'CaseData.personLastName',
    dataKey: 'person.lastName',
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
  },
  {
    name: 'CaseData.quarantineTo',
    dataKey: 'quarantineTo',
    isSortable: true,
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
  },
];
