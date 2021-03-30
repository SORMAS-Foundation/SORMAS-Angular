import { ConveyanceType } from './conveyanceType';
import { YesNoUnknown } from './yesNoUnknown';

export interface PortHealthInfoDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  airlineName?: string;
  flightNumber?: string;
  departureDateTime?: Date;
  arrivalDateTime?: Date;
  freeSeating?: YesNoUnknown;
  seatNumber?: string;
  departureAirport?: string;
  numberOfTransitStops?: number;
  transitStopDetails1?: string;
  transitStopDetails2?: string;
  transitStopDetails3?: string;
  transitStopDetails4?: string;
  transitStopDetails5?: string;
  vesselName?: string;
  vesselDetails?: string;
  portOfDeparture?: string;
  lastPortOfCall?: string;
  conveyanceType?: ConveyanceType;
  conveyanceTypeDetails?: string;
  departureLocation?: string;
  finalDestination?: string;
  details?: string;
}
