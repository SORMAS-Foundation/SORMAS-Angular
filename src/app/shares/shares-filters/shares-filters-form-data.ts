import { FORM_DATA_RADIO } from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

const statusOptions = [
  {
    value: 'captions.all',
  },
  {
    key: 'ACCEPTED',
    value: 'enum.ShareRequestStatus.ACCEPTED',
  },
  {
    key: 'PENDING',
    value: 'enum.ShareRequestStatus.PENDING',
  },
];

export const FORM_DATA_SHARES_FILTERS = [
  {
    id: 'status',
    title: 'headingSharesStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'status',
        options: statusOptions,
        separated: true,
      },
    ],
  },
];
