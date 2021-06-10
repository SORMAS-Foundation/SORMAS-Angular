import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import { TableColumn } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: _('Sample.uuid'),
    dataKey: 'uuid',
    isSortable: true,
  },
  {
    name: _('Sample.labSampleID'),
    dataKey: 'epidNumber',
    isSortable: true,
  },
  {
    name: _('Sample.associatedCase'),
    dataKey: 'associatedCase.caption',
    isSortable: true,
  },
  {
    name: _('Sample.diseaseShort'),
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: _('Sample.caseDistrict'),
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: _('Sample.shipped'),
    dataKey: 'shipped',
    isSortable: true,
  },
  {
    name: _('Sample.received'),
    dataKey: 'received',
    isSortable: true,
  },
  {
    name: _('Sample.shipmentDate'),
    dataKey: 'shipmentDate',
    isSortable: true,
  },
  {
    name: _('Sample.lab'),
    dataKey: 'lab.caption',
    isSortable: true,
  },
  {
    name: _('Sample.sampleMaterial'),
    dataKey: 'sampleMaterial',
    isSortable: true,
  },
  {
    name: _('Sample.samplePurpose'),
    dataKey: 'samplePurpose',
    isSortable: true,
  },
  {
    name: _('Sample.pathogenTestResult'),
    dataKey: 'pathogenTestResult',
    isSortable: true,
  },
  {
    name: _('Sample.additionalTestingStatus'),
    dataKey: 'additionalTestingStatus',
    isSortable: true,
  },
];
