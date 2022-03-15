import { COMMON_DATE_FORMAT, LegendFollowUpIcons } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.FollowUp.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/cases/case/$param1/details',
      params: ['uuid'],
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
    name: 'captions.FollowUp.reportDate',
    dataKey: 'reportDate',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.FollowUp.followUpUntil',
    dataKey: 'followUpUntil',
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.CaseData.symptomJournalStatus',
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
