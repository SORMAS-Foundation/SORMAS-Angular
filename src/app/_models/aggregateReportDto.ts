import { Disease } from './disease';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { PointOfEntryReferenceDto } from './pointOfEntryReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { UserReferenceDto } from './userReferenceDto';

export interface AggregateReportDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  reportingUser?: UserReferenceDto;
  disease?: Disease;
  year?: number;
  epiWeek?: number;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  healthFacility?: FacilityReferenceDto;
  pointOfEntry?: PointOfEntryReferenceDto;
  newCases?: number;
  labConfirmations?: number;
  deaths?: number;
}
