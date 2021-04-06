import { CommunityReferenceDto } from './communityReferenceDto';
import { Disease } from './disease';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityReferenceDto } from './facilityReferenceDto';
import { Language } from './language';
import { LocationDto } from './locationDto';
import { PointOfEntryReferenceDto } from './pointOfEntryReferenceDto';
import { RegionReferenceDto } from './regionReferenceDto';
import { UserReferenceDto } from './userReferenceDto';
import { UserRole } from './userRole';

export interface UserDto {
  creationDate?: Date;
  changeDate?: Date;
  uuid?: string;
  active?: boolean;
  userName?: string;
  firstName?: string;
  lastName?: string;
  userEmail?: string;
  phone?: string;
  address?: LocationDto;
  userRoles?: Array<UserRole>;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  healthFacility?: FacilityReferenceDto;
  laboratory?: FacilityReferenceDto;
  pointOfEntry?: PointOfEntryReferenceDto;
  associatedOfficer?: UserReferenceDto;
  limitedDisease?: Disease;
  language?: Language;
  hasConsentedToGdpr?: boolean;
  name?: string;
}
