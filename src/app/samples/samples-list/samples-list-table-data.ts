import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'Sample.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'Sample.labSampleID',
    dataKey: 'epidNumber',
    isSortable: true,
  },
  {
    name: 'Sample.associatedCase',
    dataKey: 'associatedCase.caption',
    isSortable: true,
  },
  {
    name: 'Sample.diseaseShort',
    dataKey: 'disease',
    isSortable: true,
  },
  {
    name: 'Sample.caseDistrict',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'Sample.shipped',
    dataKey: 'shipped',
    isSortable: true,
  },
  {
    name: 'Sample.received',
    dataKey: 'received',
    isSortable: true,
  },
  {
    name: 'Sample.shipmentDate',
    dataKey: 'shipmentDate',
    isSortable: true,
  },
  {
    name: 'Sample.lab',
    dataKey: 'lab.caption',
    isSortable: true,
  },
  {
    name: 'Sample.sampleMaterial',
    dataKey: 'sampleMaterial',
    isSortable: true,
  },
  {
    name: 'Sample.samplePurpose',
    dataKey: 'samplePurpose',
    isSortable: true,
  },
  {
    name: 'Sample.pathogenTestResult',
    dataKey: 'pathogenTestResult',
    isSortable: true,
  },
  {
    name: 'Sample.additionalTestingStatus',
    dataKey: 'additionalTestingStatus',
    isSortable: true,
  },
];
