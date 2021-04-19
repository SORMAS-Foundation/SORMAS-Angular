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

const yearOptions = Array.from({ length: 122 }, (_, i) => {
  return { key: i, value: i + 1900 };
});
const monthOptions = Array.from({ length: 12 }, (_, i) => {
  return { key: i, value: i + 1 };
});
const dayOptions = Array.from({ length: 31 }, (_, i) => {
  return { key: i, value: i + 1 };
});
export const FORM_DATA_CASE_PERSON_DETAILS = [
  {
    title: 'Person',
    required: true,
    anchorLabel: 'Case data',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: 'ID: ',
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'First name',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'Last name',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'salutation',
        label: 'Salutation',
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'Birth',
        placeholder: 'Year',
        options: yearOptions,
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'Month',
        options: monthOptions,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'Day',
        options: dayOptions,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'Sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'Present condition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'Date of death',
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'Cause of death',
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'Responsible disease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'Death place type',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'Death place discription',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'Passport number',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'Health ID',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'External token',
        className: 'size-large',
      },
    ],
  },
  {
    title: 'Occupation & Education',
    anchor: 'case_person',
    anchorLabel: 'Case person',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'occupationType',
        label: 'Occupation type',
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'occupationDetails',
        label: 'Occupation details',
        className: 'size-large',
        dependingOn: 'occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'staffOfArmedForces',
        label: 'Staff of armed forces',
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'educationType',
        label: 'Education',
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'educationDetailes',
        label: 'Details',
        className: 'size-large',
        dependingOn: 'educationType',
      },
    ],
  },
  {
    title: 'Addresses',
    anchor: 'addresses',
    anchorLabel: 'Addresses',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'widget',
        label: 'Widget',
      },
    ],
  },
  {
    title: 'Contact',
    anchor: 'contact',
    anchorLabel: 'Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: 'Nickname',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersName',
        label: 'Mother\'s name',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersMaidenName',
        label: 'Mother\'s maiden name',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fathersName',
        label: 'Father\'s name',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: 'Phone number',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'ownerOfPhone',
        label: 'Owner of phone',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'Email',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'countryOfBirth',
        label: 'Country of birth',
        options: [{ key: 'defaultCountry', value: 'Default country' }],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'citizenship',
        label: 'Citizenship',
        options: [{ key: 'defaultCitizenship', value: 'Default citizenship' }],
        newLine: true,
      },
    ],
  },
];
