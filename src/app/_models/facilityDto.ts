/**
 * SORMAS REST API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.64.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AreaType } from './areaType';
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
  postalCode?: string;
  street?: string;
  houseNumber?: string;
  additionalInformation?: string;
  areaType?: AreaType;
  contactPersonFirstName?: string;
  contactPersonLastName?: string;
  contactPersonPhone?: string;
  contactPersonEmail?: string;
  latitude?: number;
  longitude?: number;
  type?: FacilityType;
  publicOwnership?: boolean;
  archived?: boolean;
  externalID?: string;
  facilityCategoy?: string;
}
