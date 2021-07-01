import {
  FORM_DATA_DATE,
  FORM_DATA_INPUT,
  FORM_DATA_RADIO,
  FORM_DATA_SELECT,
  Disease,
  PlaceOfStay, FORM_DATA_TEXTAREA,
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

export const FORM_DATA_EVENT_ADD = [
  {
    id: 'eventData',
    title: 'headingEventData',
    fields: [
      {
        ...FORM_DATA_DATE,
        label: 'Event.reportDateTime',
        key: 'reportDate',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'internalId',
        label: 'Event.internalId',
      },
    ],
  },
  {
    id: 'externalData',
    title: 'Event.externalData',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'externalId',
        label: 'Event.externalId',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'externalToken',
        label: 'Event.externalToken',
      },
    ],
  },
  {
    id: 'event',
    title: 'entityEvent',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'title',
        label: 'Event.eventTitle',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'description',
        label: 'description',
      },
    ],
  },
  {
    id: 'date',
    title: 'date',
    fields: [
      {
        ...FORM_DATA_DATE,
        key: 'startDate',
        label: 'Event.start',
      },
      {
        ...FORM_DATA_DATE,
        key: 'endDate',
        label: 'Event.end',
      },
      {
        ...FORM_DATA_DATE,
        key: 'clusterEvolutionDate',
        label: 'Event.clusterEvolutionDate',
      },
      {
        ...FORM_DATA_SELECT,
        key: 'natureClusterEvolution',
        label: 'Event.natureClusterEvolution',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
  {
    id: 'sourceInformation',
    title: 'Event.informationSource',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'sourceType',
        label: 'Event.srcType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'sourceInstitutionalPartnerType',
        label: 'Event.srcInstitutionalPartnerType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceFirstName',
        label: 'Event.sourceFirstName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceLastName',
        label: 'Event.sourceLastName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceTelephoneNumber',
        label: 'Event.sourceTelephoneNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'sourceEmail',
        label: 'Event.sourceEmail',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'sourceDescription',
        label: 'Event.sourceDetails',
      },
    ],
  },
  {
    id: 'location',
    title: 'Location',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'typeOfPlace',
        label: 'ActivityAsCase.typeOfPlace',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityCategory',
        label: 'Facility.typeGroup',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'facilityType',
        label: 'facilityType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        key: 'Facility',
        label: 'facility',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
    ],
  },
  {
    id: 'address',
    title: 'address',
    fields: [
      {
        ...FORM_DATA_SELECT,
        label: 'country',
        key: 'country',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'region',
        key: 'region',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'district',
        key: 'district',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_SELECT,
        label: 'community',
        key: 'community',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'street',
        label: 'Facility.street',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'city',
        label: 'Facility.city',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'houseNumber',
        label: 'Facility.houseNumber',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'postalCode',
        label: 'Facility.postalCode',
      },
      {
        ...FORM_DATA_SELECT,
        label: 'Facility.areaType',
        key: 'areaType',
        options: [
          {
            key: 'default',
            value: 'default',
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'additionalInformation',
        label: 'Facility.additionalInformation',
      },
    ],
  },
  {
    id: 'gps',
    title: 'Gps',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'Gps.latitude',
        key: 'latitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'longitude',
        label: 'Gps.longitude',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'accuracy',
        label: 'Gps.accuracy',
      },
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    fields: [
      {
        ...FORM_DATA_INPUT,
        label: 'Location.details',
        key: 'Community contact person',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'responsibleUser',
        label: 'Event.responsibleUser',
      },
    ],
  },
];
