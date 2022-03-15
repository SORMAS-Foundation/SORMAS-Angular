import {
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  FORM_DATA_SEARCHBOX,
  PathogenTestResultType,
  VaccinationStatus,
  FORM_DATA_MULTISELECT,
} from '../../../app.constants';
import { FormGroupStyleType } from '../../../_models/common';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const pathogenTestResultTypeOptions = pipe.transform(PathogenTestResultType);
const vaccinationStatusOptions = pipe.transform(VaccinationStatus);

export const FORM_DATA_EVENT_PARTICIPANTS_FILTERS = [
  {
    id: 'search',
    title: '',
    appearance: FormGroupStyleType.BASIC,
    fields: [
      {
        ...FORM_DATA_SEARCHBOX,
        key: 'freeText',
        placeholder: 'strings.promptEventGroupSearchField',
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'birthdate',
    title: 'headingBirthdate',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateYYYY',
        placeholder: 'captions.Person.birthdateYYYY',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateMM',
        placeholder: 'captions.Person.birthdateMM',
        options: [],
        className: 'fullwidth',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'birthdateDD',
        placeholder: 'captions.Person.birthdateDD',
        options: [],
        className: 'fullwidth',
      },
    ],
  },
  {
    id: 'testResults',
    title: 'captions.Sample.pathogenTestResult',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'pathogenTestResult',
        options: pathogenTestResultTypeOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'vaccinationStatus',
    title: 'captions.EventParticipant.vaccinationStatus',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'vaccinationStatus',
        options: vaccinationStatusOptions,
        separated: true,
      },
    ],
  },
  {
    id: 'more',
    title: 'headingMoreFilters',
    appearance: FormGroupStyleType.COLLAPSABLE,
    fields: [
      {
        ...FORM_DATA_MULTISELECT,
        key: 'moreFilters',
        placeholder: 'captions.contactSourceCase',
        options: [
          {
            field: 'no-geo-coordinates',
            value: 'captions.eventParticipantContactCountOnlyWithSourceCaseInEvent',
          },
        ],
        className: 'fullwidth',
      },
    ],
  },
];
