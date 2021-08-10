import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
  FORM_DATA_WIDGET,
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
  BurialConductor,
} from '../../../_models/models';
import { FORM_DATA_NUMBER, FORM_DATA_TEXTAREA } from '../../../_constants/form-data';
import {
  VaccinationSource,
  VaccinationStatus,
  VaccineManufacturer,
  VaccineName,
} from '../../../_constants/enums';

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
const optionsVaccinationStatus = pipe.transform(VaccinationStatus);
const optionsVaccinationSource = pipe.transform(VaccinationSource);
const optionsVaccineName = pipe.transform(VaccineName);
const optionsVaccineManufacturer = pipe.transform(VaccineManufacturer);

export const FORM_DATA_EVENT_PARTICIPANT = [
  {
    id: 'involvement',
    title: 'involvement',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region',
        label: 'captions.EventParticipant.region',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultRegion',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district',
        label: 'captions.EventParticipant.district',
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: 'defaultDistrict',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'involvementDescription',
        label: 'captions.EventParticipant.involvementDescription',
        className: 'size-large',
      },
    ],
  },
  {
    id: 'person',
    title: 'captions.Person',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'person.uuid',
        label: 'captions.Person.uuid',
        sameLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.firstName',
        label: 'captions.firstName',
        validation: ['required'],
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.lastName',
        label: 'captions.lastName',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.salutation',
        label: 'captions.Person.salutation',
        options: optionsSalutation,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.year',
        label: 'captions.Person.birthdate',
        placeholder: 'strings.year',
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.month',
        label: ' ',
        placeholder: 'strings.month',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.day',
        label: ' ',
        placeholder: 'strings.day',
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.sex',
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
        key: 'person.placeOfBirthFacilityType',
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
        key: 'person.placeOfBirthFacility',
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
        key: 'person.gestationAgeAtBirth',
        label: 'captions.Person.gestationAgeAtBirth',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.birthWeight',
        label: 'captions.Person.birthWeight',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.presentCondition',
        label: 'captions.Person.presentCondition',
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        key: 'person.dateOfDeath',
        label: 'captions.Person.deathDate',
        className: 'size-small',
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.causeOfDeath',
        label: 'captions.Person.causeOfDeath',
        options: optionsCauseOfDeath,
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.causeOfDeathDisease',
        label: 'captions.Person.causeOfDeathDisease',
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.deathPlaceType',
        label: 'captions.Person.deathPlaceType',
        options: optionsDeathPlaceType,
        newLine: true,
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['DEAD', 'BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.deathPlaceDescription',
        label: 'captions.Person.deathPlaceDescription',
        dependingOn: 'person.deathPlaceType',
      },
      {
        ...FORM_DATA_DATE,
        key: 'burialDate',
        label: 'captions.Person.burialDate',
        className: 'size-small',
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['BURIED'],
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'burialConductor',
        label: 'captions.Person.burialConductor',
        options: optionsBurialConductor,
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.burialPlaceDescription',
        label: 'captions.Person.burialPlaceDescription',
        dependingOn: 'person.presentCondition',
        dependingOnValues: ['BURIED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.passportNumber',
        label: 'captions.Person.passportNumber',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.nationalHealthId',
        label: 'captions.Person.nationalHealthId',
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.externalId',
        label: 'captions.Person.externalId',
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.externalToken',
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
        key: 'person.occupationType',
        label: 'captions.Person.occupationType',
        options: optionsOccupationType,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.occupationDetails',
        label: 'captions.Person.occupationDetails',
        className: 'size-large',
        dependingOn: 'person.occupationType',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.staffOfArmedForces',
        label: 'captions.Person.armedForcesRelationType',
        options: optionsArmedForces,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.educationType',
        label: 'captions.Person.educationType',
        options: optionsEducation,
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.educationDetailes',
        label: 'captions.Person.educationDetails',
        className: 'size-large',
        dependingOn: 'person.educationType',
      },
    ],
  },
  {
    id: 'address',
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
    id: 'vaccination',
    title: 'headingVaccination',
    required: false,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'vaccination',
        label: 'captions.CaseData.vaccination',
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_NUMBER,
        key: 'vaccinationDoses',
        label: 'captions.CaseData.vaccinationDoses',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'firstVaccinationDate',
        hint: 'captions.CaseData.firstVaccinationDate',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'CaseData.lastVaccinationDate',
        hint: 'captions.CaseData.lastVaccinationDate',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccinationInfoSource',
        label: 'captions.CaseData.vaccinationInfoSource',
        options: optionsVaccinationSource,
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineName',
        label: 'captions.CaseData.vaccineName',
        options: optionsVaccineName,
        newLine: true,
        className: 'size-large',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'vaccineManufacturer',
        label: 'captions.CaseData.vaccineManufacturer',
        options: optionsVaccineManufacturer,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineInn',
        label: 'captions.CaseData.vaccineInn',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineBatchNumber',
        label: 'captions.CaseData.vaccineBatchNumber',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineUniiCode',
        label: 'captions.CaseData.vaccineUniiCode',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'vaccineAtcCode',
        label: 'captions.CaseData.vaccineAtcCode',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
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
