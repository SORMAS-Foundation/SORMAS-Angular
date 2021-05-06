import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  CauseOfDeath,
  PresentCondition,
  Salutation,
  Sex,
  DeathPlaceType,
  OccupationType,
  ArmedForcesRelationType,
  EducationType,
} from '../../../_models/models';

const pipe = new EnumToKeyValuePipe();

const optionsSalutation = pipe.transform(Salutation);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);
const optionsOccupationType = pipe.transform(OccupationType);
const optionsArmedForces = pipe.transform(ArmedForcesRelationType);
const optionsEducation = pipe.transform(EducationType);

const yearOptions = Array.from({ length: 122 }, (v, i) => {
  return { key: i, value: i + 1900 };
});
const monthOptions = Array.from({ length: 12 }, (v, i) => {
  return { key: i, value: i + 1 };
});
const dayOptions = Array.from({ length: 31 }, (v, i) => {
  return { key: i, value: i + 1 };
});

export const FORM_DATA_CASE_PERSON_DETAILS = [
  {
    title: _('Person'),
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: _('ID'),
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: _('First name'),
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: _('Last name'),
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'salutation',
        label: _('Salutation'),
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: _('Birth'),
        placeholder: _('Year'),
        options: yearOptions,
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: _('Month'),
        options: monthOptions,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'Day', // translate-bug
        options: dayOptions,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: _('Sex'),
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'Present condition', // translate-bug
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: _('Date of death'),
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: _('Cause of death'),
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: _('Responsible disease'),
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: _('Death place type'),
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: _('Death place discription'),
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: _('Passport number'),
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: _('Health ID'),
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: _('External token'),
        className: 'size-large',
      },
    ],
  },
  {
    title: _('Occupation & Education'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'occupationType',
        label: _('Occupation type'),
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'occupationDetails',
        label: _('Occupation details'),
        className: 'size-large',
        dependingOn: 'occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'staffOfArmedForces',
        label: _('Staff of armed forces'),
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'educationType',
        label: _('Education'),
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'educationDetailes',
        label: _('Details'),
        className: 'size-large',
        dependingOn: 'educationType',
      },
    ],
  },
  {
    title: _('Addresses'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'widget',
        label: _('Widget'),
      },
    ],
  },
  {
    title: _('Contact'),
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: _('Nickname'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersName',
        label: _('Mother\'s name'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersMaidenName',
        label: _('Mother\'s maiden name'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fathersName',
        label: _('Father\'s name'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: _('Phone number'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'ownerOfPhone',
        label: _('Owner of phone'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: _('Email'),
      },
      {
        ...FORM_DATA_SELECT,
        key: 'countryOfBirth',
        label: _('Country of birth'),
        options: [{ key: 'defaultCountry', value: 'Default country' }],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'citizenship',
        label: _('Citizenship'),
        options: [{ key: 'defaultCitizenship', value: 'Default citizenship' }],
        newLine: true,
      },
    ],
  },
];
