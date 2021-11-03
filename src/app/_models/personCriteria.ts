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
import { PersonAssociation } from './personAssociation';
import { PresentCondition } from './presentCondition';
import { RegionReferenceDto } from './regionReferenceDto';

export interface PersonCriteria {
  birthdateYYYY?: number;
  birthdateMM?: number;
  birthdateDD?: number;
  nameAddressPhoneEmailLike?: string;
  presentCondition?: PresentCondition;
  region?: RegionReferenceDto;
  district?: DistrictReferenceDto;
  community?: CommunityReferenceDto;
  personAssociation?: PersonAssociation;
}
