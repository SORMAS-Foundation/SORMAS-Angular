import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.EventAction.eventUuid',
    dataKey: 'eventUuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/details',
      params: ['eventUuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.EventAction.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventDisease',
    dataKey: 'eventDisease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventDiseaseVariant',
    dataKey: 'eventDiseaseVariant.caption',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventIdentificationSource',
    dataKey: 'eventIdentificationSource',
    translationName: 'EventIdentificationSource',
    isSortable: true,
  },
  {
    name: 'captions.singleDayEventDate',
    dataKey: 'eventStartDate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.singleDayEventEvolutionDate',
    dataKey: 'eventEvolutionDate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.EventAction.eventStatus',
    dataKey: 'eventStatus',
    translationName: 'EventStatusOptions',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventRiskLevel',
    dataKey: 'eventRiskLevel',
    translationName: 'RiskLevel',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="risk-level-$param1">$param1</span>',
      params: ['eventRiskLevel'],
    },
  },
  {
    name: 'captions.EventAction.eventInvestigationStatus',
    dataKey: 'eventInvestigationStatus',
    translationName: 'EventInvestigationStatusOptions',
    iconify: 'IconsMap',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventManagementStatus',
    dataKey: 'eventManagementStatus',
    translationName: 'EventManagementStatusOptions',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventReportingUser',
    dataKey: 'eventReportingUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.eventResponsibleUser',
    dataKey: 'eventResponsibleUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.actionTitle',
    dataKey: 'actionTitle',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.actionCreationDate',
    dataKey: 'actionCreationDate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.EventAction.actionChangeDate',
    dataKey: 'actionChangeDate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.EventAction.actionDate',
    dataKey: 'actionDate',
    isSortable: true,
    align: 'right',
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.EventAction.actionStatus',
    dataKey: 'actionStatus',
    translationName: 'ActionStatus',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.actionPriority',
    dataKey: 'actionPriority',
    translationName: 'ActionPriority',
    isSortable: true,
  },
  {
    name: 'captions.EventAction.actionLastModifiedBy',
    dataKey: 'actionLastModifiedBy.caption',
    isSortable: true,
  },
];
