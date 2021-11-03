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
import { AreaDto } from './areaDto';
import { CampaignDto } from './campaignDto';
import { CampaignFormMetaDto } from './campaignFormMetaDto';
import { CommunityDto } from './communityDto';
import { ContinentDto } from './continentDto';
import { CountryDto } from './countryDto';
import { DiseaseClassificationCriteriaDto } from './diseaseClassificationCriteriaDto';
import { DiseaseConfigurationDto } from './diseaseConfigurationDto';
import { DistrictDto } from './districtDto';
import { FacilityDto } from './facilityDto';
import { FeatureConfigurationDto } from './featureConfigurationDto';
import { PointOfEntryDto } from './pointOfEntryDto';
import { RegionDto } from './regionDto';
import { SubcontinentDto } from './subcontinentDto';
import { UserDto } from './userDto';
import { UserRoleConfigDto } from './userRoleConfigDto';

export interface InfrastructureSyncDto {
  initialSyncRequired?: boolean;
  continents?: Array<ContinentDto>;
  subcontinents?: Array<SubcontinentDto>;
  countries?: Array<CountryDto>;
  areas?: Array<AreaDto>;
  regions?: Array<RegionDto>;
  districts?: Array<DistrictDto>;
  communities?: Array<CommunityDto>;
  facilities?: Array<FacilityDto>;
  pointsOfEntry?: Array<PointOfEntryDto>;
  users?: Array<UserDto>;
  diseaseClassifications?: Array<DiseaseClassificationCriteriaDto>;
  diseaseConfigurations?: Array<DiseaseConfigurationDto>;
  userRoleConfigurations?: Array<UserRoleConfigDto>;
  deletedUserRoleConfigurationUuids?: Array<string>;
  featureConfigurations?: Array<FeatureConfigurationDto>;
  deletedFeatureConfigurationUuids?: Array<string>;
  campaigns?: Array<CampaignDto>;
  campaignFormMetas?: Array<CampaignFormMetaDto>;
}
