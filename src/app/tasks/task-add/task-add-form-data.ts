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
import { TaskContext } from '../../_models/models';

const pipe = new EnumToKeyValuePipe();

const optionsTaskContext = pipe.transform(TaskContextOptions);
const optionsTaskTypes = pipe.transform(TaskTypeOptions);
const optionsAssignedUser = pipe.transform(['Default user']);
const optionsPriority = pipe.transform(TaskPriorityOptions);
const optionsTaskStatus = pipe.transform(TaskStatusOptions);

export const FORM_DATA_TASK_ADD = [
  {
    id: 'taskContext',
    title: 'Task.taskContext',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'taskContext',
        options: optionsTaskContext,
        disabledField: true,
        preselected: TaskContext.GENERAL,
      },
    ],
  },
  {
    id: 'taskType',
    title: 'Task.taskTypeShort',
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
    title: 'date',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'Task.suggestedStart',
        key: 'suggestedStart',
      },
      {
        ...FORM_DATA_DATE,
        label: 'Task.dueDate',
        validation: ['required'],
        key: 'dueDate',
      },
    ],
  },
  {
    id: 'assignedTo',
    title: 'Task.assigneeUser',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'assignedUser.uuid',
        label: '',
        options: optionsAssignedUser,
        validation: ['required'],
      },
    ],
  },
  {
    id: 'priority',
    title: 'Task.priority',
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
    title: 'Task.creatorComment',
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
    title: 'Task.assigneeReply',
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
    title: 'Task.taskStatus',
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'taskStatus',
        options: optionsTaskStatus,
      },
    ],
  },
];
