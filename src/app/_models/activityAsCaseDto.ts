import { ActivityAsCaseType } from './activityAsCaseType';
import { ExposureRole } from './exposureRole';
import { GatheringType } from './gatheringType';
import { HabitationType } from './habitationType';
import { LocationDto } from './locationDto';
import { MeansOfTransport } from './meansOfTransport';
import { TypeOfPlace } from './typeOfPlace';
import { UserReferenceDto } from './userReferenceDto';
import { WorkEnvironment } from './workEnvironment';

export interface ActivityAsCaseDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  reportingUser?: UserReferenceDto;
  startDate?: Date;
  endDate?: Date;
  description?: string;
  activityAsCaseType: ActivityAsCaseType;
  activityAsCaseTypeDetails?: string;
  location?: LocationDto;
  role?: ExposureRole;
  typeOfPlace?: TypeOfPlace;
  typeOfPlaceDetails?: string;
  meansOfTransport?: MeansOfTransport;
  meansOfTransportDetails?: string;
  connectionNumber?: string;
  seatNumber?: string;
  workEnvironment?: WorkEnvironment;
  gatheringType?: GatheringType;
  gatheringDetails?: string;
  habitationType?: HabitationType;
  habitationDetails?: string;
}
