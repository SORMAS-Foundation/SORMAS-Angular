import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Event.uuid',
    dataKey: 'uuid',
    isSortable: true,
    essential: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event/$param1/details',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Event.externalId',
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: 'captions.Event.externalToken',
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: 'captions.Event.internalToken',
    dataKey: 'internalToken',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventStatus',
    dataKey: 'eventStatus',
    translationName: 'EventStatusOptions',
    isSortable: true,
  },
  {
    name: 'captions.Event.riskLevel',
    dataKey: 'riskLevel',
    translationName: 'RiskLevel',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="risk-level-$param1">$param1</span>',
      params: ['riskLevel'],
    },
  },
  {
    name: 'captions.Event.eventInvestigationStatus',
    dataKey: 'eventInvestigationStatus',
    translationName: 'InvestigationStatus',
    isSortable: true,
    iconify: 'IconsMap',
  },
  {
    name: 'captions.Event.eventManagementStatus',
    dataKey: 'eventManagementStatus',
    translationName: 'EventManagementStatusOptions',
    isSortable: true,
  },
  {
    name: 'captions.EventActionExport.eventDate',
    dataKey: 'startDate',
    align: 'right',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Event.evolutionDate',
    dataKey: 'evolutionDate',
    align: 'right',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Event.diseaseShort',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventTitle',
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: 'captions.Event.eventGroups',
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
    sticky: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/events/event-groups/$param1',
      params: ['eventGroups.eventGroup.uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.regionName',
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: 'captions.districtName',
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: 'captions.communityName',
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: 'captions.address',
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: 'captions.Event.srcType',
    dataKey: 'srcType',
    translationName: 'InformationSource',
    isSortable: true,
  },
  {
    name: 'captions.Event.informationSource',
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: 'captions.Event.reportDateTime',
    dataKey: 'reportDateTime',
    align: 'right',
    isSortable: true,
    format: {
      type: 'DATE',
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.Event.reportingUser',
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.Event.responsibleUser',
    dataKey: 'responsibleUser.caption',
    isSortable: true,
  },
  {
    name: 'captions.Event.numberOfPendingTasks',
    dataKey: 'contactCountSourceInEvent',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Event.participantCount',
    dataKey: 'participantCount',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Event.caseCount',
    dataKey: 'caseCount',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Event.deathCount',
    dataKey: 'deathCount',
    align: 'right',
    isSortable: true,
  },
  {
    name: 'captions.Event.contactCount',
    dataKey: 'contactCount',
    align: 'right',
    isSortable: true,
  },
];
