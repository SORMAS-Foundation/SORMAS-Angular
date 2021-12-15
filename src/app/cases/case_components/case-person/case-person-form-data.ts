import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
  ArmedForcesRelationType,
  CauseOfDeath,
  DeathPlaceType,
  EducationType,
  OccupationType,
  PresentCondition,
  Salutation,
  Sex,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_WIDGET } from '../../../_constants/form-data';

const pipe = new EnumToKeyValuePipe();

const optionsSalutation = pipe.transform(Salutation);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);
const optionsOccupationType = pipe.transform(OccupationType);
const optionsArmedForces = pipe.transform(ArmedForcesRelationType);
const optionsEducation = pipe.transform(EducationType);

export const FORM_DATA_CASE_PERSON_DETAILS = [
  {
    id: 'person',
    title: 'captions.View.persons.data',
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: 'captions.Person.uuid',
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'captions.firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'salutation',
        label: 'captions.Person.salutation',
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'captions.Person.sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'captions.Person.presentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'captions.Person.deathDate',
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'captions.Person.causeOfDeath',
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'captions.Person.causeOfDeathDisease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'captions.Person.deathPlaceType',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'captions.Person.deathPlaceDescription',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'captions.Person.externalToken',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'education',
    title: 'strings.headingPersonOccupation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'occupationType',
        label: 'captions.Person.occupationType',
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'occupationDetails',
        label: 'captions.Person.occupationDetails',
        className: 'size-large',
        dependingOn: 'occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'staffOfArmedForces',
        label: 'captions.Person.armedForcesRelationType',
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'educationType',
        label: 'captions.Person.educationType',
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'educationDetailes',
        label: 'captions.Person.educationDetails',
        className: 'size-large',
        dependingOn: 'educationType',
      },
    ],
  },
  {
    id: 'address',
    title: 'captions.Person.addresses',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-addresses-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'contact',
    title: 'strings.headingContactInformation',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: 'captions.Person.nickname',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersName',
        label: 'captions.Person.mothersName',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersMaidenName',
        label: 'captions.Person.mothersMaidenName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fathersName',
        label: 'captions.Person.fathersName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: 'captions.Person.phone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'ownerOfPhone',
        label: 'captions.Person.phoneOwner',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: 'captions.Person.emailAddress',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'countryOfBirth',
        label: 'captions.Person.birthCountry',
        options: [{ key: 'defaultCountry', value: 'Default country' }],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'citizenship',
        label: 'captions.Person.citizenship',
        options: [{ key: 'defaultCitizenship', value: 'Default citizenship' }],
        newLine: true,
      },
    ],
  },
];
