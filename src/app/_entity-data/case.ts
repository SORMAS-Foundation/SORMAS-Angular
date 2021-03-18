import { CaseLink } from '../app.constants';
import { TableColumn } from '../shared/table/table-column';

// case routing for tabs

export const caseLinks = (caseId: string): CaseLink[] => {
  return [
    { link: `/cases/case/${caseId}/details`, title: 'Case' },
    { link: `/cases/case/${caseId}/person`, title: 'Case person' },
    { link: `/cases/case/${caseId}/hospitalization`, title: 'Hospitalization' },
    { link: `/cases/case/${caseId}/symptoms`, title: 'Symptoms' },
    { link: `/cases/case/${caseId}/epidemiological-data`, title: 'Epidemiological data' },
    { link: `/cases/case/${caseId}/therapy`, title: 'Therapy' },
    { link: `/cases/case/${caseId}/follow-up`, title: 'Follow-up' },
    { link: `/cases/case/${caseId}/clinical-course`, title: 'Clinical course' },
    { link: `/cases/case/${caseId}/contacts`, title: 'Contacts' },
  ];
};

// case-table-default-columns

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Case id',
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: 'External id',
    dataKey: 'externalID',
    isSortable: true,
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
