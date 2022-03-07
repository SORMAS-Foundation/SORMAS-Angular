import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.CaseData.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.CaseData.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.internalToken',
    dataKey: 'internalToken',
    isSortable: true,
  },
  {
    name: 'captions.disease',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.diseaseVariant',
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: 'captions.Contact.caze.caseClassification',
    dataKey: 'caseClassification',
    translationName: 'CaseClassification',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.outcome',
    dataKey: 'outcome',
    translationName: 'CaseOutcome',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.investigationStatus',
    dataKey: 'investigationStatus',
    translationName: 'InvestigationStatus',
    isSortable: true,
    iconify: 'IconsMap',
  },
  {
    name: 'captions.CaseData.personUuid',
    dataKey: 'personUuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1',
      params: ['personUuid'],
      truncate: 6,
    },
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
    name: 'captions.CaseData.responsibleDistrict',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.healthFacilityName',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.pointOfEntry',
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.reportDate',
    dataKey: 'reportDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.quarantineTo',
    dataKey: 'quarantineTo',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.creationDate',
    dataKey: 'creationDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.followUpStatus',
    dataKey: 'followUpStatus',
    translationName: 'FollowupStatus',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.CaseData.symptomJournalStatus',
    dataKey: 'symptomJournalStatus',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.numberOfVisits',
    dataKey: 'numberOfVisits',
    isSortable: true,
  },
  {
    name: 'captions.CaseData.vaccinationStatus',
    dataKey: 'vaccinationStatus',
    isSortable: true,
  },
  {
    name: 'strings.headingCompleteness',
    dataKey: 'completeness',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.NUMBER,
      pattern: '$param1%',
      params: ['completeness'],
      match: {
        'value-low': [-0.01, 25.01],
        'value-medium': [25, 50.01],
        'value-normal': [50, 75.01],
        'value-high': [75, 100.01],
      },
    },
  },
];

export const legendDefs = undefined;
