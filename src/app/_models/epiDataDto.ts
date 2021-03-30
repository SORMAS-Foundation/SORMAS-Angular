import { ActivityAsCaseDto } from './activityAsCaseDto';
import { ExposureDto } from './exposureDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface EpiDataDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  exposureDetailsKnown?: YesNoUnknown;
  activityAsCaseDetailsKnown?: YesNoUnknown;
  contactWithSourceCaseKnown?: YesNoUnknown;
  highTransmissionRiskArea?: YesNoUnknown;
  largeOutbreaksArea?: YesNoUnknown;
  areaInfectedAnimals?: YesNoUnknown;
  exposures?: Array<ExposureDto>;
  activitiesAsCase?: Array<ActivityAsCaseDto>;
}
