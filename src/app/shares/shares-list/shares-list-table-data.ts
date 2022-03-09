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
    align: 'right',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DATE,
      pattern: COMMON_DATE_FORMAT,
    },
  },
  {
    name: 'captions.SormasToSormasShareRequest.dataType',
    dataKey: 'dataType',
    translationName: 'ShareRequestDataType',
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
    translationName: 'BooleanOption',
    align: 'center',
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
    translationName: 'ShareRequestStatus',
    isSortable: true,
  },
  {
    name: 'captions.SormasToSormasShareRequest.comment',
    dataKey: 'comment',
    isSortable: true,
    className: 'share-requests-comment',
  },
  {
    name: '$actions',
    dataKey: '',
    actions: [
      {
        type: 'ACCEPT',
        icon: 'check_circle_outline',
        text: 'captions.actionAccept',
        color: 'primary',
        dependingOn: 'status',
        dependingOnValues: ['PENDING'],
      },
      {
        type: 'REJECT',
        icon: 'highlight_off',
        text: 'captions.actionReject',
        className: 'button-reject',
        dependingOn: 'status',
        dependingOnValues: ['PENDING'],
      },
    ],
  },
];
