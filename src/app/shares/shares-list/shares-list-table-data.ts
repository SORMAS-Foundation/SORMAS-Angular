import { COMMON_DATE_FORMAT } from '../../app.constants';
import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.SormasToSormasShareRequest.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'captions.SormasToSormasShareRequest.creationDate',
    dataKey: 'creationDate',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.SormasToSormasShareRequest.dataType',
    dataKey: 'dataType',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasShareRequest.organizationName',
    dataKey: 'organizationName',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasShareRequest.senderName',
    dataKey: 'senderName',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasShareRequest.ownershipHandedOver',
    dataKey: 'ownershipHandedOver',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '<span class="handover-$param1">$param1</span>',
      params: ['ownershipHandedOver'],
    },
  },
  {
    name: 'captions.SormasToSormasShareRequest.status',
    dataKey: 'status',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasShareRequest.comment',
    dataKey: 'comment',
    isSortable: true,
    className: 'share-requests-comment',
  },
  {
    name: ' ',
    dataKey: '',
    isSortable: true,
    className: 'share-requests-actions',
  },
];
