import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/contacts/contact/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Contact.externalID',
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: 'captions.Contact.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'captions.Contact.internalToken',
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
    name: 'captions.Contact.contactClassification',
    dataKey: 'contactClassification',
    translationName: 'ContactClassification',
    iconify: 'ContactClassificationIcons',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactStatus',
    dataKey: 'contactStatus',
    translationName: 'ContactStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.personUuid',
    dataKey: 'personUuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/persons/person/$param1',
      params: ['personUuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Contact.firstName',
    dataKey: 'firstName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastName',
    dataKey: 'lastName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactCategory',
    dataKey: 'contactCategory',
    translationName: 'ContactCategory',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="contact-category-$param1">$param1</span>',
      params: ['contactCategory'],
    },
  },
  {
    name: 'captions.Contact.contactProximity',
    dataKey: 'contactProximity',
    translationName: 'ContactProximity',
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpStatus',
    dataKey: 'followUpStatus',
    translationName: 'FollowupStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.followUpUntil',
    dataKey: 'followUpUntil',
    align: 'right',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Contact.symptomJournalStatus',
    dataKey: 'symptomJournalStatus',
    translationName: 'SymptomJournalStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.vaccinationStatus',
    dataKey: 'vaccinationStatus',
    translationName: 'VaccinationStatus',
    isSortable: true,
  },
  {
    name: 'captions.Contact.numberOfVisits',
    dataKey: 'visitCount',
    align: 'right',
  },
  {
    name: 'captions.Event.numberOfPendingTasks',
    dataKey: 'numberOfPendingTasks',
    align: 'right',
  },
  {
    name: 'captions.CaseData.completeness',
    dataKey: 'completeness',
    align: 'right',
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
