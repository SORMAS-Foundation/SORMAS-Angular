import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
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
    title: _('Point of entry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('Point of entry type'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('Point of entry'),
      },
    ],
  },
  {
    id: 'flightDetails',
    title: _('Flight details'),
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.airlineName',
        label: _('Airline name'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureAirport',
        label: _('Departing airport'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.flightNumber',
        label: _('Flight number'),
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: _('Date of departure'),
      },
      {
        ...FORM_DATA_RADIO,
        key: 'portHealthInfo.freeSeating',
        label: _('Free seating'),
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.seatNumber',
        label: _('Seat number'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: _('Date of arrival'),
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.numberOfTransitStops',
        label: _('Number of transit stops'),
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
        label: _('Detail about first transit stop'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [1, 2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails2',
        label: _('Detail about second transit stop'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails3',
        label: _('Detail about third transit stop'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails4',
        label: _('Detail about fourth transit stop'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails5',
        label: _('Detail about fifth transit stop'),
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
    title: _('Point of entry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('Point of entry type'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('Point of entry'),
      },
    ],
  },
  {
    id: 'vesselDetails',
    title: _('Vessel details'),
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.vesselName',
        label: _('Vessel name'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.vesselDetails',
        label: _('Vessel details'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.portOfDeparture',
        label: _('Port of departure'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.lastPortOfCall',
        label: _('Last port of call'),
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: _('Date of departure'),
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: _('Date of arrival'),
        newLine: true,
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING = [
  {
    id: 'pointOfEntry',
    title: _('Point of entry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('Point of entry type'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('Point of entry'),
      },
    ],
  },
  {
    id: 'details',
    title: _('Conveyance details'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.conveyanceType',
        label: _('Conveyance type'),
        options: optionsConveyanceType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.conveyanceTypeDetails',
        label: _('Specify the conveyance type'),
        dependingOn: 'portHealthInfo.conveyanceType',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureLocation',
        label: _('Start location of travel'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.finalDestination',
        label: _('Final destination'),
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_OTHER = [
  {
    id: 'pointOfEntry',
    title: _('Point of entry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('Point of entry type'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('Point of entry'),
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'portHealthInfo.details',
        label: _('Point of entry details'),
        newLine: true,
      },
    ],
  },
];
