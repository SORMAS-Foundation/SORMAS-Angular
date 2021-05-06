import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Event id'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('External id'),
    dataKey: 'externalId',
    isSortable: true,
  },
  {
    name: _('External token'),
    dataKey: 'externalToken',
    isSortable: true,
  },
  {
    name: _('Event status'),
    dataKey: 'eventStatus',
    isSortable: true,
  },
  {
    name: _('Risk level'),
    dataKey: 'riskLevel',
    isSortable: true,
    stylify: true,
  },
  {
    name: _('Investigation status'),
    dataKey: 'eventInvestigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: _('Event management status'),
    dataKey: 'eventManagementStatus',
    isSortable: true,
  },
  {
    name: _('Date of event'),
    dataKey: 'startDate',
    isSortable: true,
  },
  {
    name: _('Evolution date'),
    dataKey: 'evolutionDate',
    isSortable: true,
  },
  {
    name: _('Disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Title'),
    dataKey: 'eventTitle',
    isSortable: true,
  },
  {
    name: _('Groups'),
    dataKey: 'eventGroups.eventGroup.uuid',
    isSortable: true,
  },
  {
    name: _('Region'),
    dataKey: 'region',
    isSortable: true,
  },
  {
    name: _('District'),
    dataKey: 'district',
    isSortable: true,
  },
  {
    name: _('Community'),
    dataKey: 'community',
    isSortable: true,
  },
  {
    name: _('Address'),
    dataKey: 'address',
    isSortable: true,
  },
  {
    name: _('Source type'),
    dataKey: 'srcType',
    isSortable: true,
  },
  {
    name: _('Source of information'),
    dataKey: 'srcMediaName',
    isSortable: true,
  },
  {
    name: _('Date of report'),
    dataKey: 'reportDateTime',
    isSortable: true,
  },
  {
    name: _('Reporting user'),
    dataKey: 'reportingUser.caption',
    isSortable: true,
  },
  {
    name: _('Responsible user'),
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
    name: _('Pending tasks'),
    dataKey: 'contactCountSourceInEvent',
    isSortable: true,
  },
  {
    name: _('Participants'),
    dataKey: 'participantCount',
    isSortable: true,
  },
  {
    name: _('Cases'),
    dataKey: 'caseCount',
    isSortable: true,
  },
  {
    name: _('Fatalities'),
    dataKey: 'deathCount',
    isSortable: true,
  },
  {
    name: _('Contacts'),
    dataKey: 'contactCount',
    isSortable: true,
  },
];
