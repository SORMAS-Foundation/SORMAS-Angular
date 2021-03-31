import { CaseReferenceDto } from './caseReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { FacilityType } from './facilityType';
import { RegionReferenceDto } from './regionReferenceDto';
import { ReportingType } from './reportingType';
import { UserReferenceDto } from './userReferenceDto';

export interface SurveillanceReportDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  reportingType?: ReportingType;
  creatingUser?: UserReferenceDto;
  reportDate?: Date;
  dateOfDiagnosis?: Date;
  facilityRegion?: RegionReferenceDto;
  facilityDistrict?: DistrictReferenceDto;
  facilityType?: FacilityType;
  facility?: FacilityReferenceDto;
  facilityDetails?: string;
  notificationDetails?: string;
  caze?: CaseReferenceDto;
}
