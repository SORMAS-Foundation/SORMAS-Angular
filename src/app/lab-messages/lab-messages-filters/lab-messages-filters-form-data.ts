import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  FORM_DATA_DATE,
  LabMessageStatus,
  FORM_DATA_DATETIME,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const labMessagesStatusOptions = pipe.transform(LabMessageStatus);

export const FORM_DATA_LAB_MESSAGE_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'searchFieldLike',
        placeholder: 'strings.promptLabMessagesSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'status',
    title: 'headingLabMessages',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'labMessageStatus',
        options: labMessagesStatusOptions,
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
        ...FORM_DATA_SELECT,
        key: 'assignee',
        service: 'userService',
        placeholder: 'captions.LabMessage.assignee',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'captions.LabMessage.messageDateTime',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_DATETIME,
        key: 'messageDateFrom',
        hint: 'captions.LabMessageCriteria.messageDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'messageDateTo',
        hint: 'captions.LabMessageCriteria.messageDateTo',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'captions.LabMessage.personBirthDate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'birthDateFrom',
        hint: 'captions.LabMessageCriteria.birthDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'birthDateTo',
        hint: 'captions.LabMessageCriteria.birthDateTo',
        className: 'fullwidth',
      },
    ],
  },
];
