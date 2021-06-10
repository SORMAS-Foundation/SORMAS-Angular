import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Event.uuid'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('Event.externalId'),
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: _('Event.externalToken'),
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: _('EventAction.eventStatus'),
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: _('Event.riskLevel'),
    dataKey: 'riskLevel',
    isSortable: true,
    stylify: true,
  },
  {
    name: _('Event.eventInvestigationStatus'),
    dataKey: 'eventInvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: _('Event.eventManagementStatus'),
    dataKey: 'eventManagementStatus',
    isSortable: true,
  },
  {
    name: _('EventActionExport.eventDate'),
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: _('Event.evolutionDate'),
    dataKey: 'evolutionDate',
    isSortable: true,
  },
  {
    name: _('Event.diseaseShort'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Event.eventTitle'),
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: _('Event.eventGroups'),
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
  },
  {
    name: _('region'),
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: _('district'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('community'),
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: _('address'),
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: _('Event.srcType'),
    dataKey: 'srcType',
    isSortable: true,
  },
  {
    name: _('Event.informationSource'),
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: _('Event.reportDateTime'),
    dataKey: 'reportDateTime',
    isSortable: true,
  },
  {
    name: _('Event.reportingUser'),
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: _('Event.responsibleUser'),
    dataKey: 'responsibleUser.caption',
    isSortable: true,
  },
  {
    name: _('Surveillance tool last share date'),
    dataKey: 'surveillanceToolLastShareDate',
    isSortable: true,
  },
  {
    name: _('Surveillance tool status'),
    dataKey: 'surveillanceToolStatus',
    isSortable: true,
  },
  {
    name: _('Surveillance tool share count'),
    dataKey: 'surveillanceToolShareCount',
    isSortable: true,
  },
  {
    name: _('Event.numberOfPendingTasks'),
    dataKey: 'contactCountSourceInEvent',
    isSortable: true,
  },
  {
    name: _('Event.participantCount'),
    dataKey: 'participantCount',
    isSortable: true,
  },
  {
    name: _('Event.caseCount'),
    dataKey: 'caseCount',
    isSortable: true,
  },
  {
    name: _('Event.deathCount'),
    dataKey: 'deathCount',
    isSortable: true,
  },
  {
    name: _('Event.contactCount'),
    dataKey: 'contactCount',
    isSortable: true,
  },
];
