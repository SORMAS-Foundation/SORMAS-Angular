import { FORM_DATA_SEARCHBOX } from '../../app.constants';
import { DateFilterOptions } from '../../_constants/enums';
import { FORM_DATA_DATE, FORM_DATA_SELECT } from '../../_constants/form-data';
import { FormGroupStyleType } from '../../_models/common';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const dateFilterOptions = pipe.transform(DateFilterOptions);

export const FORM_DATA_EVENT_GROUP_LINK_EVENT_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptSearch',
        className: 'fullwidth search-box',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'dateFilterOption',
        options: dateFilterOptions,
        value: 'DATE',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'eventDateFrom',
        hint: 'eventGroup.linkEvent.filters.from',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'eventDateTo',
        hint: 'strings.promptEventDateTo',
        className: 'fullwidth',
      },
    ],
  },
];
