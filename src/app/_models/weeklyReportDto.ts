import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { UserReferenceDto } from './userReferenceDto';
import { WeeklyReportEntryDto } from './weeklyReportEntryDto';

export interface WeeklyReportDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  reportingUser?: UserReferenceDto;
  reportDateTime?: Date;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  healthFacility?: FacilityReferenceDto;
  assignedOfficer?: UserReferenceDto;
  totalNumberOfCases?: number;
  year?: number;
  epiWeek?: number;
  reportEntries?: Array<WeeklyReportEntryDto>;
}
