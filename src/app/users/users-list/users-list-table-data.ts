import { TableColumn, TableDataFormatOptions } from '../../_models/common';

export const defaultColumnDefs: TableColumn[] = [
  {
    name: 'User.uuid',
    dataKey: 'uuid',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      truncate: 6,
    },
  },
  {
    name: 'User.active',
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
    name: 'User.userRoles',
    dataKey: 'userRoles',
    isSortable: true,
  },
  {
    name: 'User.userName',
    dataKey: 'userName',
    isSortable: true,
  },
  {
    name: 'name',
    dataKey: 'name',
    isSortable: true,
  },
  {
    name: 'User.userEmail',
    dataKey: 'email',
    isSortable: true,
  },
  {
    name: 'User.address',
    dataKey: 'address',
    isSortable: true,
    format: {
      type: TableDataFormatOptions.DISPLAY,
      pattern: '$param1, $param2 $param3',
      params: ['address.city', 'address.street', 'address.houseNumber'],
    },
  },
  {
    name: 'district',
    dataKey: 'district.caption',
    isSortable: true,
  },
  {
    name: 'User.healthFacility',
    dataKey: 'healthFacility.caption',
    isSortable: true,
  },
];
