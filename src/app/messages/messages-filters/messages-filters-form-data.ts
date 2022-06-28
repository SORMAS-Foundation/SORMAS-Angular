import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  FORM_DATA_DATE,
  ExternalMessageStatus,
  FORM_DATA_DATETIME,
} from '../../app.constants';
import { FormGroupStyleType } from '../../_models/common';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const messagesStatusOptions = [
  {
    key: '',
    value: 'captions.all',
  },
  ...pipe.transform(ExternalMessageStatus),
];

export const FORM_DATA_LAB_MESSAGE_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'searchFieldLike',
        placeholder: 'strings.promptExternalMessagesSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'status',
    title: 'headingExternalMessages',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'externalMessageStatus',
        options: messagesStatusOptions,
        value: '',
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
        placeholder: 'captions.ExternalMessage.assignee',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'date',
    title: 'captions.ExternalMessage.messageDateTime',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_DATETIME,
        key: 'messageDateFrom',
        hint: 'captions.externalMessageCriteria.messageDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'messageDateTo',
        hint: 'captions.ExternalMessageCriteria.messageDateTo',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'captions.ExternalMessage.personBirthDate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'birthDateFrom',
        hint: 'captions.ExternalMessageCriteria.birthDateFrom',
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_DATE,
        key: 'birthDateTo',
        hint: 'captions.ExternalMessageCriteria.birthDateTo',
        className: 'fullwidth',
      },
    ],
  },
];
