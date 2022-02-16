import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.Sample.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/samples/sample/$param1',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.Sample.labSampleID',
    dataKey: 'epidNumber',
    isSortable: true,
  },
  {
    name: 'captions.Sample.associatedCase',
    dataKey: 'associatedCase.caption',
    isSortable: true,
  },
  {
    name: 'captions.Sample.diseaseShort',
    dataKey: 'disease',
    translationName: 'Disease',
    isSortable: true,
  },
  {
    name: 'captions.Sample.caseDistrict',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.Sample.shipped',
    dataKey: 'shipped',
    isSortable: true,
  },
  {
    name: 'captions.Sample.received',
    dataKey: 'received',
    isSortable: true,
  },
  {
    name: 'captions.Sample.shipmentDate',
    dataKey: 'shipmentDate',
    isSortable: true,
  },
  {
    name: 'captions.Sample.lab',
    dataKey: 'lab.caption',
    isSortable: true,
  },
  {
    name: 'captions.Sample.sampleMaterial',
    dataKey: 'sampleMaterial',
    translationName: 'SampleMaterial',
    isSortable: true,
  },
  {
    name: 'captions.Sample.samplePurpose',
    dataKey: 'samplePurpose',
    translationName: 'SamplePurpose',
    isSortable: true,
  },
  {
    name: 'captions.Sample.pathogenTestResult',
    dataKey: 'pathogenTestResult',
    translationName: 'PathogenTestResultType',
    isSortable: true,
  },
  {
    name: 'captions.Sample.additionalTestingStatus',
    dataKey: 'additionalTestingStatus',
    translationName: 'AdditionalTestingStatus',
    isSortable: true,
  },
];
