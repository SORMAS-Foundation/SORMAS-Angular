import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
  FORM_DATA_WIDGET,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import {
  CauseOfDeath,
  PresentCondition,
  Salutation,
  Sex,
  DeathPlaceType,
  OccupationType,
  ArmedForcesRelationType,
  EducationType,
  BurialConductor,
} from '../../_models/models';
import { FORM_DATA_TEXTAREA } from '../../_constants/form-data';

const pipe = new EnumToKeyValuePipe();

const optionsSalutation = pipe.transform(Salutation);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);
const optionsOccupationType = pipe.transform(OccupationType);
const optionsArmedForces = pipe.transform(ArmedForcesRelationType);
const optionsEducation = pipe.transform(EducationType);
const optionsBurialConductor = pipe.transform(BurialConductor);

export const FORM_DATA_PERSON = [
  {
    id: 'person',
    title: 'captions.Person',
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
        label: 'captions.sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.region.uuid',
        label: 'captions.Person.placeOfBirthRegion',
        options: [
          {
            key: 'default',
            value: 'Default region',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.district.uuid',
        label: 'captions.Person.placeOfBirthDistrict',
        options: [
          {
            key: 'default',
            value: 'Default district',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.community.uuid',
        label: 'captions.Person.placeOfBirthCommunity',
        options: [
          {
            key: 'default',
            value: 'Default community',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'placeOfBirthFacilityType',
        label: 'captions.facilityType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'placeOfBirthFacility',
        label: 'captions.facility',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'gestationAgeAtBirth',
        label: 'captions.Person.gestationAgeAtBirth',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'birthWeight',
        label: 'captions.Person.birthWeight',
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
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'captions.Person.causeOfDeath',
        options: optionsCauseOfDeath,
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
        ...FORM_DATA_DATE,
        key: 'burialDate',
        label: 'captions.Person.burialDate',
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'burialConductor',
        label: 'captions.Person.burialConductor',
        options: optionsBurialConductor,
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'burialPlaceDescription',
        label: 'captions.Person.burialPlaceDescription',
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'captions.Person.passportNumber',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'captions.Person.externalId',
        className: 'size-large',
        newLine: true,
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
    id: 'person.address',
    title: 'captions.Person.addresses',
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
    title: 'strings.headingContactInformation',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-new-person-contact',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: 'captions.Person.nickname',
        newLine: true,
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
        ...FORM_DATA_WIDGET,
        widget: 'app-person-contacts-list',
        newLine: true,
      },
    ],
  },
  {
    id: 'details',
    title: 'captions.PersonContactDetail.additionalInformation',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'captions.Person.additionalDetails',
      },
    ],
  },
];
