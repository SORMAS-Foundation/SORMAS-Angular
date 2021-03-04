import { TableColumn } from '../shared/table/table-column';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Case id',
    dataKey: 'uuid',
  },
  {
    name: 'External id',
    dataKey: 'externalID',
  },
  {
    name: 'Disease',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'Disease variant',
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: 'Case classification',
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: 'Outcome of case',
    dataKey: 'outcome',
    isSortable: true,
  },
  {
    name: 'Investigation status',
    dataKey: 'investigationStatus',
    isSortable: true,
    icon: true,
  },
  {
    name: 'First name',
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: 'Last name',
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: 'District',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'Health facility',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: 'Point of entry',
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: 'Date of report',
    dataKey: 'reportDate',
    isSortable: true,
  },
  {
    name: 'Quarantine end',
    dataKey: 'quarantineTo',
    isSortable: true,
  },
  {
    name: 'Follow-up status',
    dataKey: 'followUpStatus',
    isSortable: true,
  },
  {
    name: 'Follow-up until',
    dataKey: 'followUpUntil',
    isSortable: true,
  },
];
