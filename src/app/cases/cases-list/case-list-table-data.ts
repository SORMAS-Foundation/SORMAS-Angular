import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Case id'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('External id'),
    dataKey: 'externalID',
    isSortable: true,
  },
  {
    name: _('Disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Disease variant'),
    dataKey: 'diseaseDetails',
    isSortable: true,
  },
  {
    name: _('Case classification'),
    dataKey: 'caseClassification',
    isSortable: true,
  },
  {
    name: _('Outcome of case'),
    dataKey: 'outcome',
    isSortable: true,
  },
  {
    name: _('Investigation status'),
    dataKey: 'investigationStatus',
    isSortable: true,
    iconify: true,
  },
  {
    name: _('First name'),
    dataKey: 'person.firstName',
    isSortable: true,
  },
  {
    name: _('Last name'),
    dataKey: 'person.lastName',
    isSortable: true,
  },
  {
    name: _('District'),
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: _('Health facility'),
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
  {
    name: _('Point of entry'),
    dataKey: 'pointOfEntry.caption',
    isSortable: true,
  },
  {
    name: _('Date of report'),
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
