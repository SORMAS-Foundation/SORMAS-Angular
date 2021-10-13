import {
  FORM_DATA_CHECKBOX,
  EventStatusOptions,
  EventInvestigationStatusOptions,
  FORM_DATA_RADIO,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const eventStatusOptions = pipe.transform(EventStatusOptions);
const investigationStatusOptions = pipe.transform(EventInvestigationStatusOptions);

export const FORM_DATA_EVENT_EDIT = [
  {
    id: 'event',
    title: 'captions.Event',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'eventStatusVisibleCheckbox',
        label: 'captions.bulkEventStatus',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'eventStatus',
        options: eventStatusOptions,
        dependingOn: 'eventStatusVisibleCheckbox',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'eventInvestigationStatusVisibleCheckbox',
        label: 'captions.bulkEventInvestigationStatus',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'eventInvestigationStatus',
        options: investigationStatusOptions,
        dependingOn: 'eventInvestigationStatusVisibleCheckbox',
        newLine: true,
      },
    ],
  },
];
