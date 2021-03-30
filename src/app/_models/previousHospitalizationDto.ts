import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { HospitalizationReasonType } from './hospitalizationReasonType';
import { RegionReferenceDto } from './regionReferenceDto';
import { YesNoUnknown } from './yesNoUnknown';

export interface PreviousHospitalizationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  admissionDate?: Date;
  dischargeDate?: Date;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  healthFacility?: FacilityReferenceDto;
  healthFacilityDetails?: string;
  isolated?: YesNoUnknown;
  description?: string;
  hospitalizationReason?: HospitalizationReasonType;
  otherHospitalizationReason?: string;
}
