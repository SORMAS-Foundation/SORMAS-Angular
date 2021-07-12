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
    title: 'Person',
    required: true,
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'uuid',
        label: 'Person.uuid',
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'firstName',
        label: 'firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'lastName',
        label: 'lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'salutation',
        label: 'Person.salutation',
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'year',
        label: 'Person.birth',
        placeholder: 'year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: 'month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: 'day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sex',
        label: 'sex',
        options: optionsSex,
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'address.region.uuid',
        label: 'Person.placeOfBirthRegion',
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
        label: 'Person.placeOfBirthDistrict',
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
        label: 'Person.placeOfBirthCommunity',
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
        label: 'Facility type',
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
        label: 'Facility',
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
        label: 'Person.gestationAgeAtBirth',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'birthWeight',
        label: 'Person.birthWeight',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: 'PresentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'dateOfDeath',
        label: 'Person.dateOfDeath',
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'causeOfDeath',
        label: 'Person.causeOfDeath',
        options: optionsCauseOfDeath,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleDisease',
        label: 'Person.causeOfDeathDisease',
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'deathPlaceType',
        label: 'Person.deathPlaceType',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'deathPlaceDescription',
        label: 'Person.deathPlaceDescription',
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_DATE,
        key: 'burialDate',
        label: 'Person.burialDate',
        className: 'size-small',
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'burialConductor',
        label: 'Person.burialConductor',
        options: optionsBurialConductor,
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'burialPlaceDescription',
        label: 'Person.burialPlaceDescription',
        dependingOn: 'presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: 'Person.passportNumber',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: 'Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'Person.externalId',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'Person.externalToken',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'education',
    title: 'Person.occupationAndEducation',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'occupationType',
        label: 'Person.occupationType',
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'occupationDetails',
        label: 'Person.occupationDetails',
        className: 'size-large',
        dependingOn: 'occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'staffOfArmedForces',
        label: 'Person.armedForcesRelationType',
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'educationType',
        label: 'Person.educationType',
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'educationDetailes',
        label: 'Person.educationDetails',
        className: 'size-large',
        dependingOn: 'educationType',
      },
    ],
  },
  {
    id: 'address',
    title: 'Person.addresses',
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
    title: 'PersonAssociation.CONTACT',
    fields: [
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-new-person-contact',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'nickname',
        label: 'Person.nickname',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersName',
        label: 'Person.mothersName',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'mothersMaidenName',
        label: 'Person.mothersMaidenName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'fathersName',
        label: 'Person.fathersName',
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
    title: 'Person.sectionAdditionalDetails',
    fields: [
      {
        ...FORM_DATA_TEXTAREA,
        key: 'additionalDetails',
        label: 'Person.additionalDetails',
      },
    ],
  },
];
