import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Sample id'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('Epid number'),
    dataKey: 'epidNumber',
    isSortable: true,
  },
  {
    name: _('Associated case'),
    dataKey: 'associatedCase.caption',
    isSortable: true,
  },
  {
    name: _('Disease'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('District'),
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: _('Sent/Dispatched'),
    dataKey: 'shipped',
    isSortable: true,
  },
  {
    name: _('Received'),
    dataKey: 'received',
    isSortable: true,
  },
  {
    name: _('Date sent'),
    dataKey: 'shipmentDate',
    isSortable: true,
  },
  {
    name: _('Laboratory'),
    dataKey: 'lab.caption',
    isSortable: true,
  },
  {
    name: _('Type of sample'),
    dataKey: 'sampleMaterial',
    isSortable: true,
  },
  {
    name: _('Purpose of the sample'),
    dataKey: 'samplePurpose',
    isSortable: true,
  },
  {
    name: _('Final laboratory result'),
    dataKey: 'pathogenTestResult',
    isSortable: true,
  },
  {
    name: _('Additional testing status'),
    dataKey: 'additionalTestingStatus',
    isSortable: true,
  },
];
