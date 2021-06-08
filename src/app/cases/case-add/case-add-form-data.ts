import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  Disease,
  PlaceOfStay,
} from '../../app.constants';

import { EnumToKeyValuePipe } from '../../_pipes/enum-to-key-value/enum-to-key-value.pipe';
import { Sex } from '../../_models/sex';
import { PresentCondition } from '../../_models/presentCondition';
import { CauseOfDeath } from '../../_models/causeOfDeath';
import { DeathPlaceType } from '../../_models/deathPlaceType';

const pipe = new EnumToKeyValuePipe();

const optionsDisease = pipe.transform(Disease);
const optionsPlaceOfStay = pipe.transform(PlaceOfStay);
const optionsSex = pipe.transform(Sex);
const optionsPresentCondition = pipe.transform(PresentCondition);
const optionsCauseOfDeath = pipe.transform(CauseOfDeath);
const optionsDeathPlaceType = pipe.transform(DeathPlaceType);

export const FORM_DATA_CASE_ADD = [
  {
    id: 'caseDaa',
    title: _('Case data'),
    required: true,
    anchor: 'case_data',
    anchorLabel: _('Case data'),
    fields: [
      {
        ...FORM_DATA_DATE,
        label: _('Date of report'),
        key: 'reportDate',
        validation: ['required'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'disease',
        label: _('Disease'),
        validation: ['required'],
        options: optionsDisease,
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'diseaseVariant.uuid',
        label: _('Disease variant'),
        options: optionsDisease,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'epidNumber',
        label: _('Epid number'),
        validation: ['required'],
      },
    ],
  },
  {
    id: 'caseOrigin',
    title: _('Case origin'),
    required: true,
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'region.uuid',
        label: _('Responsible region'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default region'),
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'district.uuid',
        label: _('Responsible district'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default district'),
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'community.uuid',
        label: _('Responsible community'),
        options: [
          {
            key: 'default',
            value: _('Default community'),
          },
        ],
        className: 'size-large',
        dependingOn: 'caseOrigin',
        dependingOnValues: ['IN_COUNTRY'],
      },
    ],
  },
  {
    id: 'placeOfStay',
    title: _('Place of stay'),
    required: true,
    fields: [
      {
        ...FORM_DATA_RADIO,
        key: 'placeOfStaty',
        validation: ['required'],
        options: optionsPlaceOfStay,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'healthFacility.uuid',
        label: _('Facility category region'),
        validation: ['required'],
        options: [
          {
            key: 'default',
            value: _('Default region'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: _('Facility type'),
        validation: ['required'],
        options: [
          {
            key: 'LABORATORY',
            value: _('Laboratory'),
          },
        ],
        newLine: true,
        className: 'size-large',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthFacilityDetails',
        label: _('Facility name and description'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['FACILITY'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'placeOfStatyDetails',
        label: _('Place description'),
        newLine: true,
        className: 'size-full',
        dependingOn: 'placeOfStaty',
        dependingOnValues: ['HOME'],
      },
    ],
  },
  {
    id: 'person',
    title: _('Person information'),
    required: true,
    fields: [
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
        key: 'year',
        label: _('Date of birth'),
        placeholder: _('Year'),
        options: [],
        className: 'size-small',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'month',
        label: ' ',
        placeholder: _('Month'),
        options: [],
        className: 'size-small',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'day',
        label: ' ',
        placeholder: _('Day'),
        options: [],
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
        label: _('Death place description'),
        dependingOn: 'deathPlaceType',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'healthId',
        label: _('Health ID'),
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'passportNumber',
        label: _('Passport number'),
        className: 'size-large',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'phoneNo',
        label: _('Phone number'),
        className: 'size-large',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'email',
        label: _('Email'),
        className: 'size-large',
      },
    ],
  },
  {
    id: 'health',
    title: _('Health'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'presentCondition',
        label: _('Present condition'),
        options: optionsPresentCondition,
        newLine: true,
      },
      {
        ...FORM_DATA_DATE,
        label: _('Sympton onset'),
        key: 'symptomOnset',
      },
    ],
  },
];
