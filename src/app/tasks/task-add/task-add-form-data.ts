import { FORM_DATA_RADIO } from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  FORM_DATA_DATE,
  FORM_DATA_NULL,
  FORM_DATA_SELECT,
  FORM_DATA_TEXTAREA,
} from '../../_constants/form-data';
import {
  TaskContextOptions,
  TaskPriorityOptions,
  TaskStatusOptions,
  TaskTypeOptions,
} from '../../_constants/enums';

const pipe = new EnumToKeyValuePipe();

const optionsTaskTypes = pipe.transform(TaskTypeOptions);
const optionsPriority = pipe.transform(TaskPriorityOptions);
const optionsTaskStatus = pipe.transform(TaskStatusOptions);

export const FORM_DATA_TASK_ADD = [
  {
    id: 'taskContext',
    title: 'captions.Task.taskContext',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'taskContext',
        value: TaskContextOptions.GENERAL,
      },
    ],
  },
  {
    id: 'taskType',
    title: 'captions.Task.taskType',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'taskType',
        label: '',
        validation: ['required'],
        options: optionsTaskTypes,
      },
    ],
  },
  {
    id: 'date',
    title: 'captions.date',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'captions.Task.suggestedStart',
        key: 'suggestedStart',
      },
      {
        ...FORM_DATA_DATE,
        label: 'captions.Task.dueDate',
        validation: ['required'],
        key: 'dueDate',
      },
    ],
  },
  {
    id: 'assignedTo',
    title: 'captions.Task.assigneeUser',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'assigneeUser.uuid',
        label: '',
        options: [
          {
            key: 'S3ROT2-XAXJYF-VMIN7W-NA5ASJ7U',
            value: 'admin'
          }
        ],
        validation: ['required'],
      },
    ],
  },
  {
    id: 'priority',
    title: 'captions.Task.priority',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'priority',
        label: '',
        options: optionsPriority,
      },
    ],
  },
  {
    id: 'taskComment',
    title: 'captions.Task.creatorComment',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'creatorComment',
        label: '',
      },
    ],
  },
  {
    id: 'executionComment',
    title: 'captions.Task.assigneeReply',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'assigneeReply',
        label: '',
      },
    ],
  },
  {
    id: 'taskStatus',
    title: 'captions.Task.taskStatus',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'taskStatus',
        options: optionsTaskStatus,
      },
    ],
  },
];
