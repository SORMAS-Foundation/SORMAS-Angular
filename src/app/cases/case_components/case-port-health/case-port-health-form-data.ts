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
    title: 'pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'pointOfEntry',
      },
    ],
  },
  {
    id: 'flightDetails',
    title: 'Flight details',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.airlineName',
        label: 'PortHealthInfo.airlineName',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureAirport',
        label: 'PortHealthInfo.departureAirport',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.flightNumber',
        label: 'PortHealthInfo.flightNumber',
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: 'PortHealthInfo.departureDateTime',
      },
      {
        ...FORM_DATA_RADIO,
        key: 'portHealthInfo.freeSeating',
        label: 'PortHealthInfo.freeSeating',
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.seatNumber',
        label: 'PortHealthInfo.seatNumber',
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: 'PortHealthInfo.arrivalDateTime',
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.numberOfTransitStops',
        label: 'PortHealthInfo.numberOfTransitStops',
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
        label: 'PortHealthInfo.transitStopDetails1',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [1, 2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails2',
        label: 'PortHealthInfo.transitStopDetails2',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails3',
        label: 'PortHealthInfo.transitStopDetails3',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails4',
        label: 'PortHealthInfo.transitStopDetails4',
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails5',
        label: 'PortHealthInfo.transitStopDetails5',
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
    title: 'pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'pointOfEntry',
      },
    ],
  },
  {
    id: 'vesselDetails',
    title: 'PortHealthInfo.vesselDetails',
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'PortHealthInfo.vesselName',
        label: 'Vessel name',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.vesselDetails',
        label: 'PortHealthInfo.vesselDetails',
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.portOfDeparture',
        label: 'PortHealthInfo.portOfDeparture',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.lastPortOfCall',
        label: 'PortHealthInfo.lastPortOfCall',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: 'PortHealthInfo.departureDateTime',
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: 'PortHealthInfo.arrivalDateTime',
        newLine: true,
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING = [
  {
    id: 'pointOfEntry',
    title: 'pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'PointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'pointOfEntry',
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
        label: 'PortHealthInfo.conveyanceType',
        options: optionsConveyanceType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.conveyanceTypeDetails',
        label: 'PortHealthInfo.conveyanceTypeDetails',
        dependingOn: 'portHealthInfo.conveyanceType',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureLocation',
        label: 'PortHealthInfo.departureLocation',
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.finalDestination',
        label: 'PortHealthInfo.finalDestination',
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_OTHER = [
  {
    id: 'pointOfEntry',
    title: 'pointOfEntry',
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: 'pointOfEntry.pointOfEntryType',
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: 'pointOfEntry',
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'portHealthInfo.details',
        label: 'PortHealthInfo.details',
        newLine: true,
      },
    ],
  },
];
