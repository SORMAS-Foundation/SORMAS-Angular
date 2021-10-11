import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'captions.User.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.LINK,
      pattern: '/users/user/$param1',
      params: ['uuid'],
      truncate: 6,
    },
  },
  {
    name: 'captions.User.active',
    dataKey: 'active',
    isSortable: true,
    iconify: true,
    align: 'center',
    className: 'user-status',
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: ' ',
      params: [],
    },
  },
  {
    name: 'captions.User.userRoles',
    dataKey: 'userRoles',
    isSortable: true,
  },
  {
    name: 'captions.User.userName',
    dataKey: 'userName',
    isSortable: true,
  },
  {
    name: 'captions.name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'captions.User.userEmail',
    dataKey: 'email',
    isSortable: true,
  },
  {
    name: 'captions.User.address',
    dataKey: 'address',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2 $param3',
      params: ['address.city', 'address.street', 'address.houseNumber'],
    },
  },
  {
    name: 'captions.district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'captions.User.healthFacility',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
];
