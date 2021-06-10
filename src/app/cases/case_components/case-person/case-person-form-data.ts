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
    title: _('Person'),
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: _('Person.uuid'),
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: _('firstName'),
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: _('lastName'),
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'salutation',
        label: _('Person.salutation'),
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: _('Person.birth'),
        placeholder: _('year'),
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: _('month'),
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: _('day'),
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: _('sex'),
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: _('PresentCondition'),
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: _('Person.dateOfDeath'),
        options: optionsPresentCondition,
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: _('Person.causeOfDeath'),
        options: optionsCauseOfDeath,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: _('Person.causeOfDeathDisease'),
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: _('Person.deathPlaceType'),
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: _('Person.deathPlaceDescription'),
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: _('Person.passportNumber'),
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: _('Person.nationalHealthId'),
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: _('Person.externalToken'),
        className: 'size-large',
      },
    ],
  },
  {
    id: 'education',
    title: _('Person.occupationAndEducation'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'occupationType',
        label: _('Person.occupationType'),
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'occupationDetails',
        label: _('Person.occupationDetails'),
        className: 'size-large',
        dependingOn: 'occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'staffOfArmedForces',
        label: _('Person.armedForcesRelationType'),
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'educationType',
        label: _('Person.educationType'),
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'educationDetailes',
        label: _('Person.educationDetails'),
        className: 'size-large',
        dependingOn: 'educationType',
      },
    ],
  },
  {
    id: 'address',
    title: _('Person.addresses'),
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-new-address',
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-addresses-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'contact',
    title: _('PersonAssociation.CONTACT'),
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: _('Person.nickname'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersName',
        label: _('Person.mothersName'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersMaidenName',
        label: _('Person.mothersMaidenName'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fathersName',
        label: _('Person.fathersName'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNumber',
        label: _('Person.phone'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'ownerOfPhone',
        label: _('Person.phoneOwner'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: _('Person.emailAddress'),
      },
      {
        ...FORM_DATA_SELECT,
        key: 'countryOfBirth',
        label: _('Person.birthCountry'),
        options: [{ key: 'defaultCountry', value: 'Default country' }],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'citizenship',
        label: _('Person.citizenship'),
        options: [{ key: 'defaultCitizenship', value: 'Default citizenship' }],
        newLine: true,
      },
    ],
  },
];
