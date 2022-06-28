import {
  FORM_DATA_DATETIME,
  FORM_DATA_INPUT,
  FORM_DATA_NULL,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
} from '../../_constants/form-data';
import { ActionMeasure, ActionPriority, ActionStatus } from '../../_constants/enums';
import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();
const actionPriorityOptions = pipe.transform(ActionPriority);
const actionMeasureOptions = pipe.transform(ActionMeasure);
const actionStatusOptions = pipe.transform(ActionStatus);

export const FORM_DATA_EVENT_ACTIONS_ADD_EDIT = [
  {
    id: 'event',
    title: 'captions.Action.event',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'disease',
        label: 'strings.promptDisease',
      },
    ],
  },
  {
    id: 'action ',
    title: 'captions.Action',
    fields: [
      {
        ...FORM_DATA_DATETIME,
        key: 'date',
        label: 'timeHeading',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'priority',
        label: 'captions.Action.priority',
        options: actionPriorityOptions,
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'measure',
        label: 'captions.Action.actionMeasure',
        options: actionMeasureOptions,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'title',
        label: 'captions.Action.title',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'actionStatus',
        newLine: true,
        options: actionStatusOptions,
      },
    ],
  },
];
