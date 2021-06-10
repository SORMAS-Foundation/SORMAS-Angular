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
    title: _('pointOfEntry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('PointOfEntry.pointOfEntryType'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('pointOfEntry'),
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
        label: _('PortHealthInfo.airlineName'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureAirport',
        label: _('PortHealthInfo.departureAirport'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.flightNumber',
        label: _('PortHealthInfo.flightNumber'),
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: _('PortHealthInfo.departureDateTime'),
      },
      {
        ...FORM_DATA_RADIO,
        key: 'portHealthInfo.freeSeating',
        label: _('PortHealthInfo.freeSeating'),
        options: optionsYesNoUnknown,
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.seatNumber',
        label: _('PortHealthInfo.seatNumber'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: _('PortHealthInfo.arrivalDateTime'),
        newLine: true,
      },
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.numberOfTransitStops',
        label: _('PortHealthInfo.numberOfTransitStops'),
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
        label: _('PortHealthInfo.transitStopDetails1'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [1, 2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails2',
        label: _('PortHealthInfo.transitStopDetails2'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [2, 3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails3',
        label: _('PortHealthInfo.transitStopDetails3'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [3, 4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails4',
        label: _('PortHealthInfo.transitStopDetails4'),
        className: 'size-large',
        newLine: true,
        dependingOn: 'portHealthInfo.numberOfTransitStops',
        dependingOnValues: [4, 5],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.transitStopDetails5',
        label: _('PortHealthInfo.transitStopDetails5'),
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
    title: _('pointOfEntry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('PointOfEntry.pointOfEntryType'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('pointOfEntry'),
      },
    ],
  },
  {
    id: 'vesselDetails',
    title: _('PortHealthInfo.vesselDetails'),
    fields: [
      {
        ...FORM_DATA_INPUT,
        key: 'PortHealthInfo.vesselName',
        label: _('Vessel name'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.vesselDetails',
        label: _('PortHealthInfo.vesselDetails'),
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.portOfDeparture',
        label: _('PortHealthInfo.portOfDeparture'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.lastPortOfCall',
        label: _('PortHealthInfo.lastPortOfCall'),
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.departureDateTime',
        label: _('PortHealthInfo.departureDateTime'),
        newLine: true,
      },
      {
        ...FORM_DATA_DATETIME,
        key: 'portHealthInfo.arrivalDateTime',
        label: _('PortHealthInfo.arrivalDateTime'),
        newLine: true,
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_GROUNDCROSSING = [
  {
    id: 'pointOfEntry',
    title: _('pointOfEntry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('PointOfEntry.pointOfEntryType'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('pointOfEntry'),
      },
    ],
  },
  {
    id: 'details',
    title: _('portHealthInfo.conveyanceDetails'),
    fields: [
      {
        ...FORM_DATA_SELECT,
        key: 'portHealthInfo.conveyanceType',
        label: _('PortHealthInfo.conveyanceType'),
        options: optionsConveyanceType,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.conveyanceTypeDetails',
        label: _('PortHealthInfo.conveyanceTypeDetails'),
        dependingOn: 'portHealthInfo.conveyanceType',
        dependingOnValues: ['OTHER'],
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.departureLocation',
        label: _('PortHealthInfo.departureLocation'),
        newLine: true,
      },
      {
        ...FORM_DATA_INPUT,
        key: 'portHealthInfo.finalDestination',
        label: _('PortHealthInfo.finalDestination'),
      },
    ],
  },
];

export const FORM_DATA_CASE_PORT_HEALTH_OTHER = [
  {
    id: 'pointOfEntry',
    title: _('pointOfEntry'),
    fields: [
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.pointOfEntryType',
        label: _('pointOfEntry.pointOfEntryType'),
        className: 'size-small',
      },
      {
        ...FORM_DATA_NULL,
        key: 'pointOfEntry.caption',
        label: _('pointOfEntry'),
      },
      {
        ...FORM_DATA_TEXTAREA,
        key: 'portHealthInfo.details',
        label: _('PortHealthInfo.details'),
        newLine: true,
      },
    ],
  },
];
