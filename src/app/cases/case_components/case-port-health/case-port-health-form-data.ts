import {
  FORM_DATA_NULL,
  FORM_DATA_RADIO,
  FORM_DATA_DATETIME,
  FORM_DATA_SELECT,
  FORM_DATA_INPUT,
  FORM_DATA_TEXTAREA,
  YesNoUnknown,
  ConveyanceTypeOptions,
} from '../../../app.constants';

import { EnumToKeyValuePipe } from '../../../_pipes/enum-to-key-value/enum-to-key-value.pipe';

const pipe = new EnumToKeyValuePipe();

const optionsYesNoUnknown = pipe.transform(YesNoUnknown);
const optionsConveyanceType = pipe.transform(ConveyanceTypeOptions);

export const FORM_DATA_CASE_PORT_HEALTH_AIRPORT = [
  {
    id: 'pointOfEntry',
    title: 'captions.pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'captions.PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'captions.pointOfEntry',
      },
    ],
  },
  {
    id: 'flightDetails',
    title: 'headingFlightDetails',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.airlineName',
        label: 'captions.PortHealthInfo.airlineName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureAirport',
        label: 'captions.PortHealthInfo.departureAirport',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.flightNumber',
        label: 'captions.PortHealthInfo.flightNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: 'captions.PortHealthInfo.departureDateTime',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'portHealthInfo.freeSeating',
        label: 'captions.PortHealthInfo.freeSeating',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.seatNumber',
        label: 'captions.PortHealthInfo.seatNumber',
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: 'captions.PortHealthInfo.arrivalDateTime',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.numberOfTransitStops',
        label: 'captions.PortHealthInfo.numberOfTransitStops',
        options: [
          {
            key: 0,
            value: 0,
          },
          {
            key: 1,
            value: 1,
          },
          {
            key: 2,
            value: 2,
          },
          {
            key: 3,
            value: 3,
          },
          {
            key: 4,
            value: 4,
          },
          {
            key: 5,
            value: 5,
          },
        ],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails1',
        label: 'captions.PortHealthInfo.transitStopDetails1',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [1, 2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails2',
        label: 'captions.PortHealthInfo.transitStopDetails2',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails3',
        label: 'captions.PortHealthInfo.transitStopDetails3',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails4',
        label: 'captions.PortHealthInfo.transitStopDetails4',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails5',
        label: 'captions.PortHealthInfo.transitStopDetails5',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [5],
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_SEAPORT = [
  {
    id: 'pointOfEntry',
    title: 'captions.pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'captions.PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'captions.pointOfEntry',
      },
    ],
  },
  {
    id: 'vesselDetails',
    title: 'captions.PortHealthInfo.vesselDetails',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'captions.PortHealthInfo.vesselName',
        label: 'Vessel name',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.vesselDetails',
        label: 'captions.PortHealthInfo.vesselDetails',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.portOfDeparture',
        label: 'captions.PortHealthInfo.portOfDeparture',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.lastPortOfCall',
        label: 'captions.PortHealthInfo.lastPortOfCall',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: 'captions.PortHealthInfo.departureDateTime',
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: 'captions.PortHealthInfo.arrivalDateTime',
        newLine: true,
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING = [
  {
    id: 'pointOfEntry',
    title: 'captions.pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'captions.PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'captions.pointOfEntry',
      },
    ],
  },
  {
    id: 'details',
    title: 'portHealthInfo.conveyanceDetails',
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.conveyanceType',
        label: 'captions.PortHealthInfo.conveyanceType',
        options: optionsConveyanceType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.conveyanceTypeDetails',
        label: 'captions.PortHealthInfo.conveyanceTypeDetails',
        dependingOn: 'portHealthInfo.conveyanceType',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureLocation',
        label: 'captions.PortHealthInfo.departureLocation',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.finalDestination',
        label: 'captions.PortHealthInfo.finalDestination',
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_OTHER = [
  {
    id: 'pointOfEntry',
    title: 'captions.pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'captions.pointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'captions.pointOfEntry',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'portHealthInfo.details',
        label: 'captions.PortHealthInfo.details',
        newLine: true,
      },
    ],
  },
];
