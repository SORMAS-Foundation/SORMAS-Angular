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
    title: 'Task',
    hidden: true,
    fields: [
      {
        ...FORM_DATA_CHECKBOX,
        key: 'changeAssigneeVisibleCheckbox',
        label: 'bulkTaskAssignee',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'taskAssignee',
        label: 'Task.taskAssignee',
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
        label: 'bulkTaskPriority',
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
        label: 'bulkTaskStatus',
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
