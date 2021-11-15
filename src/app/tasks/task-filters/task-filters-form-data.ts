import {
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  TaskStatusOptions,
  EntityRelevanceStatusOptions,
  TaskContextOptions,
  FORM_DATA_SELECT,
  FORM_DATA_DATE,
  FORM_DATA_SEARCHBOX,
} from '../../app.constants';
import { FORM_DATA_WIDGET } from '../../_constants/form-data';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const taskStatusOptions = pipe.transform(TaskStatusOptions);
const taskTypeOptions = pipe.transform(EntityRelevanceStatusOptions);
const taskContextOptions = pipe.transform(TaskContextOptions);
const dateFilterOptions = [
  {
    key: 'DATE',
    value: 'Date',
  },
  {
    key: 'EPI_WEEK',
    value: 'Epi week',
  },
];
const dateFilterType = [
  {
    key: 'START',
    value: 'Suggested start date',
  },
  {
    key: 'END',
    value: 'Due date',
  },
];

export const FORM_DATA_TASK_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptTaskSearchField',
      },
    ],
  },
  {
    id: 'status',
    title: 'captions.Task.taskStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'taskStatus',
        options: taskStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'relevance',
    title: 'captions.Task',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'relevanceStatus',
        options: taskTypeOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'context',
    title: 'captions.Task.taskContext',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'taskContext',
        options: taskContextOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'adminAspect',
    title: 'headingAdminAspect',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'region',
        className: 'hidden',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'district',
        className: 'hidden',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-location-dropdowns',
        className: 'fullwidth',
        widgetInfo: {
          region: {
            key: 'region',
            placeholder: 'captions.CaseData.responsibleRegion',
            className: 'size-full',
          },
          district: {
            key: 'district',
            placeholder: 'captions.CaseData.responsibleDistrict',
            className: 'size-full',
            dependingOn: 'region',
          },
        },
      },
      {
        ...FORM_DATA_INPUT,
        key: 'assigneeUserLike',
        placeholder: 'captions.Task.assigneeUser',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'creatorUserLike',
        placeholder: 'captions.Task.creatorUser',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'headingDateFilter',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'dateFilterOption',
        options: dateFilterOptions,
        value: 'DATE',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'dateFilterType',
        options: dateFilterType,
        placeholder: 'strings.promptEventDateType',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDateFrom',
        hint: 'strings.promptTaskDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'startDateTo',
        hint: 'strings.promptTaskDateTo',
        className: 'fullwidth',
      },
    ],
  },
];
