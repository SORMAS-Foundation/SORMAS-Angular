import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_SELECT,
  FORM_DATA_NULL,
  FORM_DATA_WIDGET,
  ArmedForcesRelationType,
  BurialConductor,
  CauseOfDeath,
  DeathPlaceType,
  EducationType,
  OccupationType,
  PresentCondition,
  Salutation,
  Sex,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { FORM_DATA_NUMBER, FORM_DATA_TEXTAREA } from '../../../_constants/form-data';
import {
  VaccinationInfoSource,
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
const optionsVaccinationSource = pipe.transform(VaccinationInfoSource);
const optionsVaccineName = pipe.transform(VaccineName);
const optionsVaccineManufacturer = pipe.transform(VaccineManufacturer);
const optionsCountryOfBirth = pipe.transform(['default country']);
const optionsCitizenship = pipe.transform(['default citizenship']);

export const FORM_DATA_EVENT_PARTICIPANT = [
  {
    id: 'involvement',
    title: 'involvement',
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: 'captions.EventParticipant.region',
        service: 'regionService',
        className: 'size-medium',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: 'captions.EventParticipant.district',
        service: 'districtService',
        determinedBy: 'region.uuid',
        className: 'size-medium',
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
        ...FORM_DATA_WIDGET,
        widget: 'app-last-update',
        className: 'push-right',
      },
      {
        ...FORM_DATA_NULL,
        key: 'person.uuid',
        label: 'captions.Person.uuid',
        sameLine: true,
        newLine: true,
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
        widget: 'app-addresses-list',
        className: 'fullwidth',
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
        key: 'person.birthName',
        label: 'captions.Person.birthName',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.nickname',
        label: 'captions.Person.nickname',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.mothersName',
        label: 'captions.Person.mothersName',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.mothersMaidenName',
        label: 'captions.Person.mothersMaidenName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.fathersName',
        label: 'captions.Person.fathersName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.namesOfGuardians',
        label: 'captions.Person.namesOfGuardians',
        newLine: true,
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.phone',
        label: 'captions.Person.phone',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.phoneOwner',
        label: 'captions.Person.phoneOwner',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.emailAddress',
        label: 'captions.Person.emailAddress',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.birthCountry.caption',
        label: 'captions.Person.birthCountry',
        options: optionsCountryOfBirth,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.citizenship.caption',
        label: 'captions.Person.citizenship',
        options: optionsCitizenship,
      },
      {
        ...FORM_DATA_WIDGET,
        widget: 'app-person-contacts-list',
        className: 'fullwidth',
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
        key: 'person.vaccination',
        label: 'captions.CaseData.vaccination',
        options: optionsVaccinationStatus,
      },
      {
        ...FORM_DATA_NUMBER,
        key: 'person.vaccinationDoses',
        label: 'captions.VaccinationInfo.vaccinationDoses',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'person.firstVaccinationDate',
        hint: 'captions.VaccinationInfo.firstVaccinationDate',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_DATE,
        key: 'person.lastVaccinationDate',
        hint: 'captions.VaccinationInfo.lastVaccinationDate',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.vaccinationInfoSource',
        label: 'captions.VaccinationInfo.vaccinationInfoSource',
        options: optionsVaccinationSource,
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.vaccineName',
        label: 'captions.VaccinationInfo.vaccineName',
        options: optionsVaccineName,
        newLine: true,
        className: 'size-large',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'person.vaccineManufacturer',
        label: 'captions.VaccinationInfo.vaccineManufacturer',
        options: optionsVaccineManufacturer,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.vaccineInn',
        label: 'captions.VaccinationInfo.vaccineInn',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.vaccineBatchNumber',
        label: 'captions.VaccinationInfo.vaccineBatchNumber',
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.vaccineUniiCode',
        label: 'captions.VaccinationInfo.vaccineUniiCode',
        newLine: true,
        dependingOn: 'vaccination',
        dependingOnValues: ['VACCINATED'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'person.vaccineAtcCode',
        label: 'captions.VaccinationInfo.vaccineAtcCode',
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
