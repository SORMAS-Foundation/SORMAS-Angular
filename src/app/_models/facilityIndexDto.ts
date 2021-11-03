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
import { CommunityReferenceDto } from './communityReferenceDto';
import { DistrictReferenceDto } from './districtReferenceDto';
import { FacilityType } from './facilityType';
import { RegionReferenceDto } from './regionReferenceDto';

export interface FacilityIndexDto {
  uuid?: string;
  name?: string;
  type?: FacilityType;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  city?: string;
  latitude?: number;
  longitude?: number;
  externalID?: string;
}
