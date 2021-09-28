import {
  FORM_DATA_CHECKBOX,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  TaskPriorityOptions,
  TaskStatusOptions,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const taskPriorityOptions = pipe.transform(TaskPriorityOptions);
const taskStatusOptions = pipe.transform(TaskStatusOptions);

export const FORM_DATA_TASK_EDIT = [
  {
    id: 'task',
    title: 'captions.Task',
    hiddenLeftSection: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'changeAssigneeVisibleCheckbox',
        label: 'captions.bulkTaskAssignee',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'taskAssignee',
        label: 'captions.Task.taskAssignee',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
        dependingOn: 'changeAssigneeVisibleCheckbox',
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'taskPriorityVisibleCheckbox',
        label: 'captions.bulkTaskPriority',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'taskPriority',
        options: taskPriorityOptions,
        dependingOn: 'taskPriorityVisibleCheckbox',
        newLine: true,
      },
      {
        ...FORM_DATA_CHECKBOX,
        key: 'taskStatusVisibleCheckbox',
        label: 'captions.bulkTaskStatus',
        newLine: true,
      },
      {
        ...FORM_DATA_RADIO,
        key: 'taskStatus',
        options: taskStatusOptions,
        dependingOn: 'taskStatusVisibleCheckbox',
        newLine: true,
      },
    ],
  },
];
