import { FORM_DATA_MULTISELECT } from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

// const optionsDisease = pipe.transform(Disease);

export const FORM_DATA_COLUMNS_PICKER = {
  ...FORM_DATA_MULTISELECT,
  key: 'columns',
  label: 'Toggle columns',
  placeholder: 'Search by column name',
  options: [
    {
      key: 'A1',
      value: 'Aiurea 1',
    },
    {
      key: 'A2',
      value: 'Aiurea 2',
    },
    {
      key: 'A3',
      value: 'Aiurea 3',
    },
    {
      key: 'A4',
      value: 'Aiurea 4',
    },
    {
      key: 'A5',
      value: 'Aiurea 5',
    },
    {
      key: 'A6',
      value: 'Aiurea 6',
    },
    {
      key: 'A7',
      value: 'Aiurea 7',
    },
    {
      key: 'A8',
      value: 'Aiurea 8',
    },
    {
      key: 'A9',
      value: 'Aiurea 9',
    },
  ],
  className: 'size-auto',
};
