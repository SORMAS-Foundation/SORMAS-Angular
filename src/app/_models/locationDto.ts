import { AreaType } from './areaType';
import { CommunityReferenceDto } from './communityReferenceDto';
import { CountryReferenceDto } from './countryReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { FacilityType } from './facilityType';
import { PersonAddressType } from './personAddressType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface LocationDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  pseudonymized?: boolean;
  country?: CountryReferenceDto;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  details?: string;
  city?: string;
  areaType?: AreaType;
  latitude?: number;
  longitude?: number;
  latLonAccuracy?: number;
  postalCode?: string;
  street?: string;
  houseNumber?: string;
  additionalInformation?: string;
  addressType?: PersonAddressType;
  addressTypeDetails?: string;
  facilityType?: FacilityType;
  facility?: FacilityReferenceDto;
  facilityDetails?: string;
}
