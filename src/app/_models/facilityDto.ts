import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityType } from './facilityType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface FacilityDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  name?: string;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  city?: string;
  latitude?: number;
  longitude?: number;
  type?: FacilityType;
  publicOwnership?: boolean;
  archived?: boolean;
  externalID?: string;
}
