import { LegendFollowUpIcons } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Contact.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/contacts/contact/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Contact.firstName',
    dataKey: 'personFirstName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastName',
    dataKey: 'personLastName',
    isSortable: true,
  },
  {
    name: 'captions.Contact.contactOfficer',
    dataKey: 'resposibleContactOfficer',
    isSortable: true,
  },
  {
    name: 'captions.Contact.lastContactDate',
    dataKey: 'dateLastContact',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.FollowUp.reportDate',
    dataKey: 'reportDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.FollowUp.followUpUntil',
    dataKey: 'followUpUntil',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: 'M/d/yyyy',
    },
  },
  {
    name: 'captions.Contact.symptomJournalStatus',
    dataKey: 'symptomJournalStatus',
    translationName: 'SymptomJournalStatus',
    isSortable: true,
  },
];

export const legendDefs: any[] = [
  {
    iconName: LegendFollowUpIcons.NOT_SYMPTOMATIC,
    iconClass: 'visit-result-not-symptomatic',
    description: 'enum.VisitResult.NOT_SYMPTOMATIC',
  },
  {
    iconName: LegendFollowUpIcons.SYMPTOMATIC,
    iconClass: 'visit-result-symptomatic',
    description: 'enum.VisitResult.SYMPTOMATIC',
  },
  {
    iconName: LegendFollowUpIcons.UNAVAILABLE,
    iconClass: 'visit-result-unavailable',
    description: 'enum.VisitResult.UNAVAILABLE',
  },
  {
    iconName: LegendFollowUpIcons.UNCOOPERATIVE,
    iconClass: 'visit-result-uncooperative',
    description: 'enum.VisitResult.UNCOOPERATIVE',
  },
  {
    iconName: LegendFollowUpIcons.NOT_PERFORMED,
    iconClass: 'visit-result-not-performed',
    description: 'enum.VisitResult.NOT_PERFORMED',
  },
];
